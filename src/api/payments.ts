import { Payment } from '~/types'

import apiClient from './api-client'

const paymentsPath = 'payments'

export function fetchPayments(): Promise<Payment[]> {
  return apiClient.get(paymentsPath)
}
