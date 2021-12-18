import { Outlet } from 'react-router-dom'

import { Header, Sidebar } from '~/components'

import BackgroundLogo from './background-logo'
import styles from './layout.module.scss'

export function AppLayout() {
  return (
    <>
      <header>
        <Header />
      </header>

      <div className={styles.fullHeightWrapper}>
        <nav className={styles.nav}>
          <Sidebar />
        </nav>

        <main className={styles.main}>
          <BackgroundLogo className={styles.bgLogo} />
          <div className={styles.moduleContainer}>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}
