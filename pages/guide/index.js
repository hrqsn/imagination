import Head from 'next/head'
import GuideHMenu from '@/components/guide-menu'
import SectionWrapper from '@/components/section-wrapper'

export default function Guide () {
  return (
    <>
      <Head>
        <title>パークの楽しみ方 - Imagination Server</title>
      </Head>
      
      {/* <GuideHMenu /> */}
      <SectionWrapper>
        <section className='section text-center'>
          <h4>準備中</h4>
          <p className='section__body'>Coming Soon.</p>
        </section>
      </SectionWrapper>
    </>
  )
}
