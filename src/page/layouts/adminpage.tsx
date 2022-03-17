import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminPage = (props: Props) => {
  return (
    <div>
        <header>Header</header>
        <aside>Aside</aside>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AdminPage