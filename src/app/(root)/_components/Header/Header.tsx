"use client"

import React from 'react'
import HeaderMenus from './components/HeaderMenus'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex">
      <Link href="/">발랑</Link>
      <HeaderMenus />
    </header>
  )
}

export default Header