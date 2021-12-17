import { Outlet, Route } from 'react-router-dom'

import { ModuleLayout } from '~/components'

import { TabNavigation } from './containers'
import { Cashless } from './pages/cashless'

export default function Payments() {
  return (
    <ModuleLayout title="Conversion">
      <TabNavigation />
      <Outlet />
    </ModuleLayout>
  )
}
