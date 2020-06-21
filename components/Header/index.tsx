import React from 'react'
import Link from 'next/link'
import { Badge } from '@chakra-ui/core'

export const Header: React.FC = () => (
  <header>
    <h1>next pwa example</h1>
    <Badge>badge</Badge>
    <Badge>badge</Badge>
    <nav>
      <Link href="/"><a>home</a></Link>
      <Link href="/example"><a>example</a></Link>
    </nav>
  </header>
)
