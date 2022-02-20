import Seo from './seo'
import ParallaxWrapper from './parallax-wrapper'
import Header from './header'
import Footer from './footer'

export default function Layout ({ children }) {
  return (
    <>
      <Seo />
      <ParallaxWrapper>
        <Header />
        {children}
        <Footer />
      </ParallaxWrapper>
    </>
  )
}
