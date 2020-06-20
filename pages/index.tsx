import React, { useEffect } from 'react'
import Head from 'next/head'
import { APP_TITLE } from '../config'

const Index = () => {
  return (
    <>
      <Head>
        <title>{ APP_TITLE } / index</title>
      </Head>
      <div>
        <div>next pwa..</div>
        <div>next pwa..</div>
      </div>
    </>
  )
}

export default Index
