import { useEffect, useRef, createContext, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const ScrollContext = createContext({
  scroller: null,
  ready: false
})

export default function Scroller ({ callbacks, children }) {
  const scrollEl = useRef(null)
  const scrollRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    (async() => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      scrollRef.current = new LocomotiveScroll({
        el: scrollEl.current,
        smooth: true
      })

      scrollRef.current.on('scroll', ScrollTrigger.update)

      ScrollTrigger.scrollerProxy(scrollEl.current, {
        scrollTop (value) {
          return arguments.length
            ? scrollRef.current.scrollTo(value, 0, 0)
            : scrollRef.current.scroll.instance.scroll.y
        },
        getBoundingClientRect () {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        },
        pinType: scrollEl.current.style.transform ? 'transform' : 'fixed'
      })

      setReady(true)

      ScrollTrigger.addEventListener('refresh', () => scrollRef.current.update())
      ScrollTrigger.refresh()
    })()

    return () => {
      ScrollTrigger.removeEventListener('refresh', () => scrollRef.current.update())
      scrollRef.current.destroy()
      setReady(false)
    }
  }, [callbacks])

  return (
    <ScrollContext.Provider value={{ scroller: scrollRef.current, ready: ready }}>
      <div ref={scrollEl} data-scroll-container>
        {children}
      </div>
    </ScrollContext.Provider>
  )
}
