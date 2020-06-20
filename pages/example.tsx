import React from 'react'
import Head from 'next/head'
import { APP_TITLE } from '../config'

const Example: React.FC = () => (
  <>
    <Head>
    <title>{ APP_TITLE } / example</title>
    </Head>
    <div>example</div>
  </>
)

export default Example
