import React, { useEffect } from 'react'
import { Box, Button } from '@chakra-ui/core'
import Head from 'next/head'
import { APP_TITLE } from '../config'

const Index = () => {
  return (
    <>
      <Head>
        <title>index / { APP_TITLE }</title>
      </Head>
      <div>
        <Box border="1px solid #222" p="1rem">box</Box>
      </div>
    </>
  )
}

export default Index
