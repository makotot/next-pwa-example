import React from 'react'
import Link from 'next/link'
import { Badge, Box, Flex } from '@chakra-ui/core'

export const Header: React.FC = () => (
  <header>
    <h1>next pwa example</h1>
    <Badge>badge</Badge>
    <Badge>badge</Badge>
    <nav>
      <Flex>
        <Box p="1rem" backgroundColor="tomato">
          <Link href="/"><a>home</a></Link>
        </Box>
        <Box p="1rem">
          <Link href="/example"><a>example</a></Link>
        </Box>
      </Flex>
    </nav>
  </header>
)
