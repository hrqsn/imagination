import Image from 'next/image'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import casts from '@/casts'

gsap.registerPlugin(ScrollTrigger)

import s from './style.module.scss'

export default function Member () {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: `.${s.members}`,
        start: 'top center',
        end: 'bottom top'
      }
    }).to(`.${s.header__subtitle}>span`, {
      y: 0,
      opacity: 1,
      ease: 'power3.out',
      duration: 1
    }).to(`.${s.header__title}>span`, {
      y: 0,
      opacity: 1,
      ease: 'power3.out',
      duration: 1,
      delay: 0.1
    }, '<').to(`.${s.member}`, {
      y: 0,
      opacity: 1,
      ease: 'power3.out',
      duration: 2,
      delay: 0.4,
      stagger: {
        amount: 0.4
      }
    }, '<')
  }, [])

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <small className={s.header__subtitle}>
            <span>MEMBERS</span>
          </small>
          <h1 className={s.header__title}>
            <span>メンバー</span>
          </h1>
        </div>
        <div className={s.content}>
          <div className={s.members}>
            {casts.map(cast => (
              <div className={s.member} key={cast.id}>
                <Image src={`/img/casts/${cast.id}.webp`} alt={cast.name} className={s.member__avatar} width={96} height={96} placeholder='/img/noimage.png' />
                <h1 className={s.member__name}>{cast.name}</h1>
                <p className={s.member__role}>{cast.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
