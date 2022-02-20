import Status from '@/components/about-status'
import PageHeader from '@/components/page-header'
import SectionWrapper from '@/components/section-wrapper'

export default function About () {
  return (
    <>
      <PageHeader
        title='活動について'
        image='/img/about.webp'
      />

      <SectionWrapper>
        <section className='section'>
          <h4>概要</h4>
          <div className='section__body'>
            <p>
              Imagination Serverは、東京ディズニーリゾートを愛する34名のメンバーが、<br />Minecraft: Bedrock Editionを用いて完全再現するプロジェクトです。
            </p>
            <p>
              2016年8月に発足したこのプロジェクトは、有志の学生, 社会人によって非営利で運営されています。
            </p>
          </div>
        </section>
        <section className='section'>
          <h4>再現状況</h4>
          <div className='section__body'>
            <Status />
          </div>
        </section>
        {/* <section className='section'>
          <h4>資料提供</h4>
        </section> */}
      </SectionWrapper>
    </>
  )
}
