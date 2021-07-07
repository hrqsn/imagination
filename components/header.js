import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header () {
  const router = useRouter()

  const activeNavItem = (pathname) => {
    return router.pathname === pathname ? 'text-black font-semibold' : ''
  }

  return (
    <>
      <header className='max-w-screen-lg h-32 sm:h-20 mx-6 sm:mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 space-y-6 sm:space-y-0'>
        <Link href='/'>
          <a>
            <img src='/img/logo.png' alt='Imagination Server' className='h-6' />
          </a>
        </Link>
        <nav className='nav-scroll space-x-9 text-gray-600 text-sm'>
          <Link href='/'>
            <a className={activeNavItem('/')}>ホーム</a>
          </Link>
          <Link href='/events/visit'>
            <a className={activeNavItem('/events/visit')}>観光企画</a>
          </Link>
          <Link href='/status'>
            <a className={activeNavItem('/status')}>再現状況</a>
          </Link>
          <Link href='/reference'>
            <a className={activeNavItem('/reference')}>資料提供</a>
          </Link>
          <Link href='/news'>
            <a className={activeNavItem('/news')}>ニュース</a>
          </Link>
          <Link href='/contact'>
            <a className={activeNavItem('/contact')}>お問い合わせ</a>
          </Link>
        </nav>
      </header>
    </>
  )
}
