import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

import s from './style.module.scss'

export default function GuideHMenu () {
  const router = useRouter()

  function active (pathname) {
    if (router.pathname === pathname) return true
    return false
  }

  return (
    <>
      <header className={s.container}>
        <div className={s.wrapper}>
          <div className={s.inner}>
            <div className={s.nav}>
              <nav className={s.links}>
                <Link href='/guide'>
                  <a className={cn(s.link, active('/guide') && s.active)}>トップ</a>
                </Link>
                <Link href='/guide/attractions'>
                  <a className={cn(s.link, active('/guide/attractions') && s.active)}>アトラクション</a>
                </Link>
                <Link href='/guide/goods'>
                  <a className={cn(s.link, active('/guide/goods') && s.active)}>グッズ</a>
                </Link>
                <Link href='/guide/foods'>
                  <a className={cn(s.link, active('/guide/foods') && s.active)}>フード</a>
                </Link>
                <Link href='/guide/garrely'>
                  <a className={cn(s.link, active('/guide/garrely') && s.active)}>ギャラリー</a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
