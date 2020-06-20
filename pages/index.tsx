import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/core'
import Head from 'next/head'
import { APP_TITLE } from '../config'

const Index = () => {
  useEffect(() => {
    console.log('useeffect')
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && (window as any).workbox !== 'undefined') {
      console.log('sw------')
      const workbox = (window as any).workbox;
      workbox.addEventListener('installed', (e) => {
        console.log(`${e.type} triggered`)
        console.log(e.isUpdate)
        if (e.isUpdate) {
          if (confirm('A new version is installed, reload to use the new version immediately?')) {
            window.location.reload()
            workbox.messageSW({type: 'SKIP_WAITING'})
          }
        }
      })

      workbox.addEventListener('controlling', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      workbox.addEventListener('activated', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      // workbox.addEventListener('waiting', event => {
      //   console.log('waiting')
      //   if (confirm('A new version is installed, reload to use the new version immediately?')) {
      //     workbox.addEventListener('controlling', event => {
      //       window.location.reload()
      //     })
      //     workbox.messageSW({type: 'SKIP_WAITING'})
      //   } else {
      //     // User rejected, new verion will be automatically load when user open the app next time.
      //   }
      // })
      workbox.register()
    }
  }, [])
  return (
    <>
      <Head>
        <title>{ APP_TITLE } / index</title>
      </Head>
      <div>
        <Box>box</Box>
        <Box>box</Box>
        <Box>box</Box>
        <Box>box</Box>
        <div>next pwa..</div>
        <div>next pwa..</div>
      </div>
    </>
  )
}

export default Index
