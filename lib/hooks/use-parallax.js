import { useEffect, useRef } from 'react'

export default function useParallax ({ element }) {
  const frameID = useRef(null)
  const options = {
    viewport: {
      top: 0
    },
    lastPosition: -1
  }

  const requestAnimationFrame = () => {
    options.viewport.top = window.scrollY

    if (options.lastPosition === options.viewport.top) {
      frameID.current = window.requestAnimationFrame(requestAnimationFrame)
      return
    }

    frameID.current = window.requestAnimationFrame(requestAnimationFrame)
    options.lastPosition = options.viewport.top
  }
  
  useEffect(() => {
    requestAnimationFrame()
    return () => window.cancelAnimationFrame(frameID.current)
  }, [])
}
