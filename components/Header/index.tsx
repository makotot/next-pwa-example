import React from 'react'
import Link from 'next/link'

export const Header: React.FC = () => (
  <header>
    <h1>next pwa example</h1>
    <nav>
      <Link href="/"><a>home</a></Link>
      <Link href="/example"><a>example</a></Link>
    </nav>
  </header>
)
