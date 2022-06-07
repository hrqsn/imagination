import Image from 'next/image'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import casts from '@/casts'

gsap.registerPlugin(ScrollTrigger)

import s from './style.module.scss'

export default function Member () {
  const [sortedCasts, setSourtedCasts] = useState([])

  function sortCasts (a, b) {
    a = a.tag.toString().toLowerCase()
    b = b.tag.toString().toLowerCase()
    if (a < b) return -1
    else if (a > b) return 1
    return 0
  }

  function shuffleCasts () {
    let _casts = casts
    for (let i = _casts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = _casts[i]
      _casts[i] = _casts[j]
      _casts[j] = temp
    }
    return _casts
  }

  useEffect(() => {
    const _casts = casts.sort(sortCasts)
    setSourtedCasts([...sortedCasts, ..._casts])
  }, [])

  useEffect(() => {
    if (sortedCasts.length === 0) return

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
  }, [sortedCasts])

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <small className={s.header__subtitle}>
            <span>Members</span>
          </small>
          <h1 className={s.header__title}>
            <span>メンバー</span>
          </h1>
        </div>
        <div className={s.content}>
          <div className={s.members}>
            {sortedCasts.map(cast => (
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
