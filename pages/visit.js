import PageHeader from '@/components/page-header'
import SectionWrapper from '@/components/section-wrapper'
import dayjs from 'dayjs'

export default function Visit () {
  return (
    <>
      <PageHeader
        title='観光企画'
        image='/img/visit.webp'
      />

      <SectionWrapper>
        <section className='section'>
          <h4>観光企画とは</h4>
          <p className='section__body'>観光企画は、忠実に再現されたバーチャルパークを体験いただけるイベントです。徒歩による観光のほか、アトラクションやショーなどをゲストの方々と一緒にお楽しみいただけます ✨</p>
        </section>
        <section className='section'>
          <h4>運営情報</h4>
          <p className='section__body'>[{dayjs().format('MM/DD')}] 次回の開園に向けて準備を進めています。</p>
        </section>
      </SectionWrapper>
    </>
  )
}
