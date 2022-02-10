import { useEffect } from 'react'
import Parallax from '@/components/parallax'
import gsap from 'gsap'

import s from './style.module.scss'

export default function Hero () {
  useEffect(() => {
    gsap.timeline()
    .to(`.${s.header__title}>div>span`, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      stagger: {
        amount: 0.2
      }
    }).to(`.${s.header__subtitle}>div>span`, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      delay: 0.6
    }, '<').to(`.${s.video__wrapper}`, {
      clipPath: 'inset(0% 0 0 0)',
      duration: 2,
      ease: 'expo.out',
      delay: 0.2
    }, '<')
  }, [])

  return (
    <div>
      <div className={s.header}>
        <div className={s.header__content}>
          <div className={s.header__title}>
            <div>
              <span>We</span>&nbsp;
              <span>are</span>&nbsp;
              <span>recreating</span>
            </div>
            <div>
              <span>Tokyo</span>&nbsp;
              <span>Disney</span>&nbsp;
              <span>Resort</span>&nbsp;
              <span>in</span>&nbsp;
              <span>Minecraft ✨</span>
            </div>
          </div>
          <div className={s.header__subtitle}>
            <div>
              <span>Minecraftで東京ディズニーリゾートを再現プロジェクト</span>
            </div>
          </div>
        </div>
      </div>
      <div className={s.video}>
        <div className={s.video__wrapper}>
          <Parallax speed={-1}>
            <video className={s.video__content} poster='/img/bg.webp' playsInline autoPlay loop muted>
              <source src='/img/bg.webm' type='video/webm' />
              <source src='/img/bg.mp4' type='video/mp4' />
            </video>
          </Parallax>
        </div>
      </div>
    </div>
  )
}
