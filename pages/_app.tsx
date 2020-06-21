import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { ThemeProvider } from '@chakra-ui/core'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const useSW = () => {
  // useEffect(() => {
  //   if (typeof window !== 'undefined' && 'serviceWorker' in navigator && (window as any).workbox !== 'undefined') {
  //     const workbox = (window as any).workbox;

  //     workbox.addEventListener('installed', (e) => {
  //       console.log(`${e.type} triggered`)
  //       console.log(e.isUpdate)
  //       if (e.isUpdate) {
  //         if (confirm('A new version is installed, reload to use the new version immediately?')) {
  //           window.location.reload()
  //           workbox.messageSW({type: 'SKIP_WAITING'})
  //         }
  //       }
  //     })

  //     workbox.addEventListener('waiting', event => {
  //       console.log(`Event ${event.type} is triggered.`)
  //       console.log(event)
  //       console.log(event.isUpdate)
  //     })

  //     workbox.addEventListener('controlling', event => {
  //       console.log(`Event ${event.type} is triggered.`)
  //       console.log(event)
  //     })

  //     workbox.addEventListener('activated', event => {
  //       console.log(`Event ${event.type} is triggered.`)
  //       console.log(event)
  //     })

  //     workbox.register()
  //   }
  // }, [])

  useEffect(()=>{
    const workbox = (window as any).workbox;
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && workbox !== undefined) {
      // add event listeners to handle any of PWA lifecycle event
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
      workbox.addEventListener('installed', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
        if (confirm('A new version is installed, reload to use the new version immediately?')) {
          workbox.addEventListener('controlling', event => {
            window.location.reload()
          })
          workbox.messageSW({type: 'SKIP_WAITING'})
        } else {
          // User rejected, new verion will be automatically load when user open the app next time.
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

      // // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // // NOTE: set skipWaiting to false in next.config.js pwa object
      // // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
      // workbox.addEventListener('waiting', event => {
      //   if (confirm('A new version is installed, reload to use the new version immediately?')) {
      //     workbox.addEventListener('controlling', event => {
      //       window.location.reload()
      //     })
      //     workbox.messageSW({type: 'SKIP_WAITING'})
      //   } else {
      //     // User rejected, new verion will be automatically load when user open the app next time.
      //   }
      // })

      // ISSUE - this is not working as expected, why?
      // I could only make message event listenser work when I manually add this listenser into sw.js file
      workbox.addEventListener('message', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      // never forget to call register as auto register is turned off in next.config.js
      workbox.register()
    }
  }, [])
}

const useUpdateSWonRouteChange = () => {
  const router = useRouter()
  const updateSW = () => {
    navigator.serviceWorker.ready.then((registration) => {
      console.log('update sw')
      registration.update()
    })
  }
  useEffect(() => {
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
