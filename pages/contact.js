import Head from 'next/head'
import PageHeader from '@/components/page-header'
import SectionWrapper from '@/components/section-wrapper'
import Button from '@/components/button'

export default function Contact () {
  return (
    <>
      <Head>
        <title>お問い合わせ - Imagination Server</title>
      </Head>
      
      <PageHeader
        title='お問い合わせ'
        image='/img/contact.webp'
      />

      <SectionWrapper>
        <section className='section section-contact'>
          <p className='section__body'>質問やご連絡等は「カスタマーサポート」TwitterアカウントのDMまでお願いいたします。</p>
          <div className='section__center'>
            <Button title='問い合わせる' href='https://twitter.com/imasaba_support/' target='_blank' />
          </div>
        </section>
      </SectionWrapper>
    </>
  )
}
