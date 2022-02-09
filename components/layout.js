import { useRouter } from 'next/router'
import Seo from './seo'
import Scroller from './scroller'
import Header from './header'
import Footer from './footer'

export default function Layout ({ children }) {
  const router = useRouter()

  return (
    <>
      <Seo />
      <Scroller callbacks={router.pathname}>
        <Header />
        {children}
        <Footer />
      </Scroller>
    </>
  )
}
