import ky, { Options } from 'ky'

import { API_URL } from '~/config'
import { HTTPMethod } from '~/types'

function handleResponse(response: Response) {
  if (response.ok) {
    return response.json()
  } else {
    return Promise.reject({
      status: response.status,
      statusText: response.statusText,
    })
  }
}

type ApiConfig = {
  baseUrl: string
}

/**
 * Facade pattern for abstracting fetch libs.
 * ky is a wrapper around native fetch, has same api with axios.
 */
function createApiClient(config: ApiConfig) {
  const { baseUrl } = config

  // axios, fetch can be used here
  const request = ky.create({
    prefixUrl: baseUrl,
  })

  function createMethodHandler(method: HTTPMethod) {
    return async (url: string, options?: Options & { data: unknown }) => {
      const { data, ...rest } = options || {}

      const response = await request(url, {
        method,
        // axios use data, fetch use body, ky use json to send JSON data.
        json: data,
        ...rest,
      })
      return handleResponse(response)
    }
  }

  return {
    get: createMethodHandler('GET'),
    post: createMethodHandler('POST'),
    delete: createMethodHandler('DELETE'),
    put: createMethodHandler('PUT'),
    patch: createMethodHandler('PATCH'),
  }
}

const apiClient = createApiClient({
  baseUrl: API_URL,
})

export default apiClient
