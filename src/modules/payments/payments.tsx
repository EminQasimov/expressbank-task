import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { ModuleLayout } from '~/components'
import { EmptyState } from '~/ui'

import { Block, TabNavigation } from './containers'
import { Cashless } from './pages/cashless'

export default function Payments() {
  return (
    <ModuleLayout title="Conversion">
      <TabNavigation />
      <Block>
        <Routes>
          <Route index element={<Navigate to="cashless" replace />} />
          <Route path="cashless" element={<Cashless />} />
          <Route path="*" element={<EmptyState text="Page not found" />} />
        </Routes>
      </Block>
    </ModuleLayout>
  )
}
