import React, { useEffect } from 'react'
import { Box, Button } from '@chakra-ui/core'
import Head from 'next/head'
import { APP_TITLE } from '../config'

const Index = () => {
  return (
    <>
      <Head>
        <title>{ APP_TITLE } / index</title>
      </Head>
      <div>
        <Box border="1px solid #000">box</Box>
      </div>
    </>
  )
}

export default Index
