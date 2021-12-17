export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'DELETE'

export type Payment = {
  id: string
  amount: number
  currency: string
}
