export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'DELETE'

export type Payment = {
  flag: string
  currency: string
  buyRate: number
  buyStatus: string
  sellRate: number
  sellStatus: string
}
