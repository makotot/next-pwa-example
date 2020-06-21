import React from 'react'
import Link from 'next/link'
import { Box, Flex } from '@chakra-ui/core'

export const Header: React.FC = () => (
  <header>
    <h1>next pwa example</h1>
    <nav>
      <Flex>
        <Box p="1rem" backgroundColor="tomato">
          <Link href="/"><a>home</a></Link>
        </Box>
        <Box p="1rem" backgroundColor="tomato">
          <Link href="/example"><a>example</a></Link>
        </Box>
      </Flex>
    </nav>
  </header>
)
