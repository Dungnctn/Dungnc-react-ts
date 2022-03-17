import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Nav from '../../components/nav'
import HomePage from '../home'

type Props = {}

const WebsitePage = (props: Props) => {
  return (
    <div>
        <header>
            <Header />
            <Nav />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default WebsitePage