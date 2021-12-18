import { lazy, Suspense } from 'react'

export * from './payments-store'

const Payments = lazy(() => import('./payments'))

export default function PaymentsModule() {
  return (
    <Suspense fallback={null}>
      <Payments />
    </Suspense>
  )
}
