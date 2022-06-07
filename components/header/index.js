import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import gsap from 'gsap'
import cn from 'classnames'

import s from './style.module.scss'

export default function Header () {
  const router = useRouter()
  const [open, setOpen] = useState(null)

  const toggleMenu = () => setOpen(!open)
  const tapRoot = () => {
    if (open) setOpen(false)
  }

  useEffect(() => {
    if (open === null) return

    if (open) {
      gsap.timeline({
        onComplete: () => {
          // document.documentElement.style.overflow = 'hidden'
          // document.body.style.overflow = 'hidden'
        }
      })
      .to(`.${s.menu__btn}>span:nth-child(1)`, {
        y: 3.5,
        duration: .2,
        ease: 'expo.out'
      }).to(`.${s.menu__btn}>span:nth-child(2)`, {
        y: -3.5,
        duration: .2,
        ease: 'expo.out'
      }, '<').set(`.${s.menu__btn}>span:nth-child(2)`, {
        width: 20
      }).to(`.${s.menu__btn}>span:nth-child(1)`, {
        rotation: 45,
        duration: .4,
        ease: 'expo.out'
      }).to(`.${s.menu__btn}>span:nth-child(2)`, {
        rotation: -45,
        duration: .4,
        ease: 'expo.out'
      }, '<').to(`.${s.container}`, {
        backgroundColor: '#fafafa'
      })
    } else {
      gsap.timeline({
        onComplete: () => {
          document.documentElement.style.overflow = null
          document.body.style.overflow = null
        }
      })
      .to(`.${s.menu__btn}>span:nth-child(1)`, {
        rotation: 0,
        duration: .2,
        ease: 'expo.out'
      }).to(`.${s.menu__btn}>span:nth-child(2)`, {
        rotation: 0,
        duration: .2,
        ease: 'expo.out'
      }, '<').set(`.${s.menu__btn}>span:nth-child(2)`, {
        width: 16
      }).to(`.${s.menu__btn}>span:nth-child(1)`, {
        y: 0,
        duration: .4,
        ease: 'expo.out'
      }).to(`.${s.menu__btn}>span:nth-child(2)`, {
        y: 0,
        duration: .4,
        ease: 'expo.out'
      }, '<').to(`.${s.container}`, {
        backgroundColor: 'rgba(250, 250, 250, 0.98)'
      })
    }
  }, [open])

  function active (pathname) {
    const basepath = router.pathname.split('/')[1]
    if (basepath === pathname.split('/')[1]) return true
    return false
  }

  return (
    <>
      <header className={s.container}>
        <div className={s.wrapper}>
          <div className={s.inner}>
            <div className={s.root}>
              <Link href='/'>
                <a className={s.root__logo} onClick={tapRoot}>
                  <img src='/img/logo.svg' alt='Imagination Server' width={161} height={20} />
                </a>
              </Link>
            </div>
            <div className={s.nav}>
              <nav className={s.nav__links}>
                <Link href='/'>
                  <a className={cn(s.nav__link, active('/') && s.active)}>トップ</a>
                </Link>
                <Link href='/visit'>
                  <a className={cn(s.nav__link, active('/visit') && s.active)}>観光企画</a>
                </Link>
                <Link href='/news'>
                  <a className={cn(s.nav__link, active('/news') && s.active)}>ニュース</a>
                </Link>
                <Link href='/terms'>
                  <a className={cn(s.nav__link, active('/terms') && s.active)}>利用規約</a>
                </Link>
                <a className={cn(s.nav__link, s.nav__button)} href='https://twitter.com/imasaba_support/' target='_blank' rel='noopener noreferrer'>お問い合わせ</a>
              </nav>
              <span className={s.nav__bar} />
            </div>
            <div className={cn(s.menu, open && s['is-open'])}>
              <button className={s.menu__btn} onClick={toggleMenu} arealabel='Hamburger Menu'>
                <span />
                <span />
              </button>
              <div className={s.menu__overlay} />
              <div className={s.menu__nav}>
                <div className={s.menu__inner}>
                  <nav className={s.menu__links}>
                    <Link href='/'>
                      <a className={cn(s.menu__link, active('/') && s.active)} onClick={toggleMenu}>
                        <span>トップ</span>
                      </a>
                    </Link>
                    <Link href='/visit'>
                      <a className={cn(s.menu__link, active('/visit') && s.active)} onClick={toggleMenu}>
                        <span>観光企画</span>
                      </a>
                    </Link>
                    <Link href='/news'>
                      <a className={cn(s.menu__link, active('/news') && s.active)} onClick={toggleMenu}>
                        <span>ニュース</span>
                      </a>
                    </Link>
                    <Link href='/terms'>
                      <a className={cn(s.menu__link, active('/terms') && s.active)} onClick={toggleMenu}>
                        <span>利用規約</span>
                      </a>
                    </Link>
                    <div className={s.menu__divider}></div>
                    <a className={cn(s.menu__link, s.menu__button)} href='https://twitter.com/imasaba_support/' target='_blank' rel='noopener noreferrer'>
                      <span>お問い合わせ</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12"><title>launch-app</title><g strokeWidth="1" fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round"><path d="M11.5,8.5V10A1.5,1.5,0,0,1,10,11.5H2A1.5,1.5,0,0,1,.5,10V2A1.5,1.5,0,0,1,2,.5H3.5"></path><polyline points="6.5 0.5 11.5 0.5 11.5 5.5" stroke="#666"></polyline><line x1="11.5" y1="0.5" x2="5.5" y2="6.5" stroke="#666"></line></g></svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
