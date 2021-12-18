import { Payment } from '~/types'

import apiClient from './api-client'

const paymentsPath = 'payments'

// dummy data for now
const currencies = [
  {
    flag: 'us',
    currency: 'USD',
    buyRate: 1.698,
    buyStatus: 'stable',
    sellRate: 1.702,
    sellStatus: 'stable',
  },
  {
    flag: 'ru',
    currency: 'RUB',
    buyRate: 2.013,
    buyStatus: 'up',
    sellRate: 2.05,
    sellStatus: 'down',
  },
  {
    flag: 'gb',
    currency: 'GBP',
    buyRate: 0.0263,
    buyStatus: 'stable',
    sellRate: 0.0272,
    sellStatus: 'stable',
  },
  {
    flag: 'tr',
    currency: 'TRY',
    buyRate: 2.27,
    buyStatus: 'up',
    sellRate: 2.325,
    sellStatus: 'down',
  },
  {
    flag: 'eu',
    currency: 'EUR',
    buyRate: 2.27,
    buyStatus: 'up',
    sellRate: 2.325,
    sellStatus: 'down',
  },
]

export function fetchPayments(): Promise<Payment[]> {
  return apiClient.get(paymentsPath)
}

export function fetchPaymentCurrencies(): Promise<Payment[]> {
  return new Promise((resolve) => resolve(currencies))
}
