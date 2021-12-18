import { useParams } from 'react-router-dom'

import { menus, ModuleLayout } from '~/components'
import { EmptyState } from '~/ui'

export const NotFound = () => {
  let urlParams = useParams()
  let path = urlParams['*']
  const currentPage = menus.find((menu) => menu.path === path)

  return (
    <ModuleLayout title={currentPage?.title}>
      <EmptyState text="Go to Payments page" />
    </ModuleLayout>
  )
}
