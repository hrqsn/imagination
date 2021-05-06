import Providers from '@/components/providers'
import { useEffect } from 'react'

import '@/styles/tailwind.css'
import 'tailwindcss/utilities.css'
import '@/styles/custom.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onload = function () {
      window.onscroll = function () {
        const elm = document.getElementsByClassName('scroll-fx')
        const height = window.innerHeight
        for (let i = 0; i < elm.length; i++) {
          const rect = elm[i].getBoundingClientRect()
          const pos = rect.top - height + height/5
          if (pos < 0) {
            elm[i].classList.add('inshow')
          }
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
