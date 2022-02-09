import Layout from '@/components/layout'

import '@/styles/main.scss'
import 'locomotive-scroll/src/locomotive-scroll.scss'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
