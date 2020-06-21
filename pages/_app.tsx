import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { ThemeProvider } from '@chakra-ui/core'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const useSW = () => {
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

      workbox.register()
    }
  }, [])
}

const useUpdateSWonRouteChange = () => {
  const router = useRouter()
  const updateSW = () => {
    console.log('routechange')
    navigator.serviceWorker.ready.then((registration) => {
      console.log('update sw')
      registration.update()
    })
  }
  useEffect(() => {
    console.log(router)
    router.events.on('routeChangeComplete', updateSW)
    return () => {
      router.events.off('routeChangeComplete', updateSW)
    }
  }, [])
}

const MyApp = ({ Component, pageProps }) => {
  useSW()
  useUpdateSWonRouteChange()

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
