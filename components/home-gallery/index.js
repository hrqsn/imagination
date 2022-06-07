import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import s from './style.module.scss'

export default function HomeGallery () {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: `.${s.container}`,
        start: 'top center',
        end: 'bottom top'
      }
    }).to(`.${s.item}`, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      stagger: {
        amount: 0.1
      }
    })
  }, [])

  return (
    <section className={s.container}>
      <div className={s.gallery}>
        <div className={s.item}>
          <img src='/img/gallery-0.webp' alt='gallery' />
        </div>
        <div className={s.item}>
          <img src='/img/gallery-1.webp' alt='gallery' />
        </div>
        <div className={s.item}>
          <img src='/img/gallery-2.webp' alt='gallery' />
        </div>
        <div className={s.item}>
          <img src='/img/gallery-3.webp' alt='gallery' />
        </div>
      </div>
    </section>
  )
}
