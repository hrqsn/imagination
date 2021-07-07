import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Visit () {
  return (
    <>
      <Head>
        <title>観光企画 | Imagination Server</title>
      </Head>

      <Header />

      <section className='w-full section-image' style={{ backgroundImage: 'url("/img/visit.jpg")' }}>
        <div className='w-full h-full flex items-center justify-center'>
          <div>
            <span className='text-xs sm:text-sm block font-medium text-gray-100 subtitle text-center'>KANKO KIKAKU</span>
            <h1 className='mt-1 text-xl sm:text-2xl font-semibold text-white text-center'>観光企画</h1>
          </div>
        </div>
      </section>

      <main className='max-w-screen-md mx-auto px-4'>
        <section className='relative pt-32'>
          {/* <p className='text-lg font-semibold text-center'>準備中</p>
          <p className='mt-2 text-sm text-center'>Coming Soon.</p> */}
          <h1 className='text-2xl font-semibold text-center'>イベント内容</h1>
          <div className='mt-8 text-center space-y-3'>
            <p>2021年夏、Imagination Serverは5周年を迎えます。ここまで支えてくださったゲストの皆様への感謝を込めて、「<strong>ImaginationServer 5th Anniversary ~Thanks giving voyage~</strong>」を開催いたします！</p>
            <p>5周年に相応しい、ロイヤルブルーに染まったパークで皆様のお越しをお待ちしております。</p>
            <p>さあ、5周年のImagination Serverをお楽しみください！</p>
          </div>

          <h1 className='mt-24 text-2xl font-semibold text-center'>日時</h1>
          <p className='mt-8 text-center'>8/7(土) ~ 8/9(月) 10:00 ~ 24:00</p>

          <h1 className='mt-24 text-2xl font-semibold text-center'>参加方法</h1>
          <ul className='mt-8 space-y-3'>
            <li>1. 参加には <span className='underline'>Minecraft統合版<span className='text-sm'>(Windows10, スマホ, タブレット版)</span></span>, <span className='underline'>インターネット環境</span>, <span className='underline'>Discordアプリ(<a href='https://discord.com/' target='_blank' rel='noopener' className='text-sm underline text-blue-800'>ダウンロードリンク</a>)</span>が必要です。Minecraft Java, Switch, PS4版はサーバーへの接続ができません。予めご了承下さい。</li>
            <li>2. <a href='https://docs.google.com/forms/d/e/1FAIpQLScR0UE2coAooI0DxRC0xilU-YFQkyKQo90PxmP2K9aBlGaJ5g/viewform' target='_blank' rel='noopener' className='underline text-blue-800 font-semibold'>参加申請フォーム</a> から必要事項をご記入の上、回答を送信してください。送信後、Discordサーバーへの参加方法が表示されます。案内に沿って必ずご参加ください。</li>
            <li>3. Discordサーバーに参加すると、詳細な参加方法や注意事項をご確認いただけます。ゲストの皆様やキャストとの交流を楽しみながら、開園をお待ちください。</li>
          </ul>

          {/* <div className='relative w-full'>
            <figure className='lg:-mx-8'>
              <div className='mt-24 rounded-md section-image' style={{'backgroundImage': 'url("/img/visit.jpg")'}}></div>
            </figure>
          </div> */}
        </section>
      </main>

      <Footer />
    </>
  )
}
