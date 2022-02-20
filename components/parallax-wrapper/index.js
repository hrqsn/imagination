import { useRef, useEffect } from 'react'

export default function ParallaxWrapper ({ children }) {
  const frameID = useRef(null)
  const options = {
    viewport: {
      top: 0,
      bottom: 0,
      height: 0
    },
    scale: 1.4,
    lastPosition: -1
  }
  
  const parallax = () => {
    const items = document.querySelectorAll('.parallax')
    items.forEach((item, i) => {
      const bounds = item.getBoundingClientRect()
      const elementBounds = item.firstChild.getBoundingClientRect()

      const inview = bounds.top < options.viewport.height && bounds.top + bounds.height > 0
      if (!inview) return

      let percentage = ((options.viewport.bottom - (options.viewport.top + elementBounds.top)) / ((options.viewport.height + elementBounds.height) / 100)).toFixed(1)
      percentage = Math.min(100, Math.max(0, percentage))
      const rangeMax = elementBounds.height * options.scale - elementBounds.height
      const translateValue = ((percentage / 100) * rangeMax - rangeMax / 2).toFixed(0)

      item.firstChild.style.transform = `translateY(${translateValue}px) scale(${options.scale})`
      item.firstChild.style.willChange = `transform`
    })
  }

  const requestAnimationFrame = () => {
    options.viewport.top = window.scrollY
    options.viewport.height = document.documentElement.clientHeight
    options.viewport.bottom = window.scrollY + document.documentElement.clientHeight

    if (options.lastPosition === options.viewport.top) {
      frameID.current = window.requestAnimationFrame(requestAnimationFrame)
      return
    }

    frameID.current = window.requestAnimationFrame(requestAnimationFrame)
    options.lastPosition = options.viewport.top

    parallax()
  }
  
  useEffect(() => {
    requestAnimationFrame()
    return () => window.cancelAnimationFrame(frameID.current)
  }, [])

  return (
    <div>
      {children}
    </div>
  )
}
