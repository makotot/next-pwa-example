import React from 'react'
import Head from 'next/head'
import { APP_TITLE } from '../config'
import { Button } from '@chakra-ui/core'

const Example: React.FC = () => (
  <>
    <Head>
    <title>{ APP_TITLE } / example</title>
    </Head>
    <div>example</div>
    <Button>button</Button>
  </>
)

export default Example
