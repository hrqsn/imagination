import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Providers from '@/components/providers'
import * as gtag from '@/lib/gtag'

import '@/styles/main.css'
import '@/styles/chrome-bug.css'
import '@/styles/prose.css'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  useEffect(() => {
    window.onscroll = function () {
      const elm = document.getElementsByClassName('scroll-fx')
      const height = window.innerHeight
      for (let i = 0; i < elm.length; i++) {
        const rect = elm[i].getBoundingClientRect()
        const pos = rect.top - height + height / 6
        if (pos < 0) {
          elm[i].classList.add('inshow')
        }
      }
    }
  }, [])

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
