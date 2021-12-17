import { Outlet } from 'react-router-dom'

import { Header, Sidebar } from '~/components'

import styles from './layout.module.scss'

export function AppLayout() {
  return (
    <div className={styles.layout}>
      <header>
        <Header />
      </header>

      <section className={styles.content}>
        <aside className={styles.left}>
          <Sidebar />
        </aside>

        <main className={styles.right}>
          <Outlet />
        </main>
      </section>
    </div>
  )
}
