import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import cn from 'classnames'

gsap.registerPlugin(ScrollTrigger)

import s from './style.module.scss'

export default function Hero () {
  useEffect(() => {
    gsap.timeline()
    .to(`.${s.title}>div>span`, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      stagger: {
        amount: 0.2
      }
    }).to(`.${s.subtitle}>div>span`, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      delay: 0.6
    }, '<').to(`.${s.video}`, {
      opacity: 1,
      duration: 2,
      delay: 0.4
    }, '<')
  }, [])

  return (
    <div>
      <div className={s.header}>
        <h1 className={s.title}>
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
            <span>Minecraft:</span>&nbsp;
            <span>Bedrock</span>&nbsp;
            <span>Edition</span>
          </div>
        </h1>
        <div className={s.subtitle}>
          <div>
            <span>Minecraftで東京ディズニーリゾートを再現プロジェクト</span>
          </div>
        </div>
      </div>
      <div className={s.video}>
        <div className={s.video__wrapper}>
          <video className={cn(s.video__content, 'lazyload')} poster='/img/bg.webp' playsInline autoPlay loop muted>
            <source data-src='/img/bg.webm' type='video/webm' />
            <source data-src='/img/bg.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  )
}
