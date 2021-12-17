import './fonts.css'

import { Navigate, Route, Routes } from 'react-router-dom'

import { PaymentsModule } from '~/modules'
import { Cashless } from '~/modules/payments/pages/cashless'
import { EmptyState } from '~/ui'

import { AppLayout } from './app-layout'
import Providers from './providers'

export function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/payments" replace />} />

          <Route path="payments/*" element={<PaymentsModule />}>
            <Route
              index
              element={<Navigate to="/payments/cashless" replace />}
            />
            <Route path="cashless" element={<Cashless />} />
            <Route path="*" element={<EmptyState text="Page not found" />} />
          </Route>

          <Route path="*" element={<EmptyState text="Page not found" />} />
        </Route>
      </Routes>
    </Providers>
  )
}
