import Head from 'next/head'
import Image from 'next/image'
import PageHeader from '@/components/page-header'
import SectionWrapper from '@/components/section-wrapper'
import dayjs from 'dayjs'

export default function Visit () {
  return (
    <>
      <Head>
        <title>観光企画 - Imagination Server</title>
      </Head>
      
      <PageHeader
        title='観光企画'
        image='/img/visit.webp'
      />

      <SectionWrapper>
        {/* <section className='section'>
          <h4>観光企画とは</h4>
          <p className='section__body'>観光企画は、忠実に再現されたバーチャルパークを体験いただけるイベントです。徒歩による観光のほか、アトラクションやショーなどをゲストの方々と一緒にお楽しみいただけます。</p>
        </section>
        <section className='section'>
          <h4>運営情報</h4>
          <p className='section__body'>[{dayjs().format('MM/DD')}] 次回の開園に向けて準備を進めています。</p>
        </section> */}
        <section className='section section__header'>
          <h2 className='section__title'>観光企画「Imagination Explosion​​​​​​​」開催決定！</h2>
          <p className='section__body'>この度、Imagination Server 5周年フィナーレを飾る観光企画「Imagination Explosion ~Imagination Server 5th Anniversary Grand Finale~」を開催いたします。</p>
        </section>
        <hr className='section__divider' />
        <section className='section'>
          <h4>観光企画とは</h4>
          <p className='section__body'>観光企画は、忠実に再現されたバーチャルパークを体験いただけるイベントです。徒歩による観光のほか、アトラクションやショーなどを全世界から集まるゲストの皆様と一緒にお楽しみいただけます。</p>
          <p className='section__body'>今回の観光企画では「想造力の爆発！」をテーマに、熱い夏を盛り上げる様々なプログラムの公演を予定しております。定番のアトラクションからエンターテインメントショーまで、“熱く”進化を遂げたImagination Serverをどうぞお楽しみください。</p>
        </section>
        <section className='section'>
          <div className='section__gallery'>
            <div className='section__gallery--item'>
              <Image src='/img/visits/0.webp' width={1280} height={720} />
            </div>
            <div className='section__gallery--item'>
              <Image src='/img/visits/2.webp' width={1280} height={720} />
            </div>
            <div className='section__gallery--item'>
              <Image src='/img/visits/4.webp' width={1280} height={720} />
            </div>
            <div className='section__gallery--item'>
              <Image src='/img/visits/5.webp' width={1280} height={720} />
            </div>
          </div>
        </section>
        <section className='section'>
          <h4>日時</h4>
          <p className='section__body'>8/5(金) ~ 8/7(日) 10:00 ~ 24:00</p>
          <p className='section__description'>開園当日にスムーズにご参加いただけるよう、テクスチャパックの事前ダウンロードを推奨しています。8/3(水) 16:00より一部エリアを開放いたしますので、開園までに一度接続をお試しください。</p>
        </section>
        <section className='section'>
          <h4>必要なもの</h4>
          <ul className='section__body'>
            <li>1. <span>Minecraft統合版 (Windows10, スマホ, タブレット版)</span></li>
            <li>2. <span>インターネット環境</span></li>
            <li>3. <span>Discordアプリ (<a className='underline' href='https://discord.com/' target='_blank' rel='noopener'>ダウンロードリンク</a>)</span></li>
          </ul>
          <p className='section__description'>Minecraft Java, PS4版はサーバーへの接続ができません。Switch版につきましては本体の設定を行うことで参加できる場合があります。予めご了承下さい。</p>
        </section>
        <section className='section'>
          <h4>参加方法</h4>
          <ul className='section__body'>
            <li>1. <a className='underline' href='https://forms.gle/yYovXtGfHDrxtk57A' target='_blank' rel='noopener'>参加申請フォーム</a> から必要事項をご記入の上、回答を送信してください。送信後、Discordサーバーへの参加方法が表示されますので、案内に沿って必ずご参加ください。</li>
            <li>2. Discordサーバーに参加すると、詳細な参加方法や注意事項をご確認いただけます。ゲストの皆様やキャストとの交流を楽しみながら、開園をお待ちください！</li>
          </ul>
        </section>
        <section className='section'>
          <p className='section__body'>それでは、皆様にお会いできることをキャスト一同心よりお待ちしております ✨</p>
        </section>
      </SectionWrapper>
    </>
  )
}
