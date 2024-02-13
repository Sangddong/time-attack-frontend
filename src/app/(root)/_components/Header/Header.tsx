"use client"

import React from 'react'
import { Link } from 'react-router-dom'
import HeaderMenus from './components/HeaderMenus'

function Header() {
  return (
    <header className="flex">
      <Link href="/">발랑</Link>
      <HeaderMenus/>
    </header>
  )
}

export default Header