import './fonts.css'

import { Navigate, Route, Routes } from 'react-router-dom'

import { PaymentsModule } from '~/modules'
import { EmptyState } from '~/ui'

import { AppLayout } from './app-layout'
import Providers from './providers'

export function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/payments" replace />} />
          <Route path="payments/*" element={<PaymentsModule />} />
          <Route path="*" element={<EmptyState text="Page not found" />} />
        </Route>
      </Routes>
    </Providers>
  )
}
