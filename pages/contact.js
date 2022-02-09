import PageHeader from '@/components/page-header'
import SectionWrapper from '@/components/section-wrapper'

export default function Contact () {
  return (
    <>
      <PageHeader
        title='お問い合わせ'
        image='/img/contact.webp'
      />

      <SectionWrapper>
        <section className='section section-contact'>
          <p className='section__body'>質問やご連絡等は「カスタマーサポート」TwitterアカウントのDMまでお願いいたします。</p>
          <a href='https://twitter.com/imasaba_support/' target='_blank' rel='noopener noreferrer'>問い合わせる →</a>
        </section>
      </SectionWrapper>
    </>
  )
}
