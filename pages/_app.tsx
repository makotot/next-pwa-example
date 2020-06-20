import React, { useEffect } from 'react'
import { ThemeProvider } from '@chakra-ui/core'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {
  // useEffect(() => {
  //   console.log('useeffect')
  //   if (typeof window !== 'undefined' && 'serviceWorker' in navigator && (window as any).workbox !== 'undefined') {
  //     const workbox = (window as any).workbox;
  //     workbox.addEventListener('installed', (e) => {
  //       console.log(`${e.type} triggered`)
  //     })

  //     workbox.addEventListener('controlling', event => {
  //       console.log(`Event ${event.type} is triggered.`)
  //       console.log(event)
  //     })

  //     workbox.addEventListener('activated', event => {
  //       console.log(`Event ${event.type} is triggered.`)
  //       console.log(event)
  //     })

  //     workbox.addEventListener('waiting', event => {
  //       console.log('waiting')
  //       if (confirm('A new version is installed, reload to use the new version immediately?')) {
  //         workbox.addEventListener('controlling', event => {
  //           window.location.reload()
  //         })
  //         workbox.messageSW({type: 'SKIP_WAITING'})
  //       } else {
  //         // User rejected, new verion will be automatically load when user open the app next time.
  //       }
  //     })
  //     workbox.register()
  //   }
  // }, [])

  return (
    <ThemeProvider>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
