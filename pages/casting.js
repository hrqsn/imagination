import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Casting () {
  return (
    <>
      <Head>
        <title>キャスティング | Imagination Server</title>
      </Head>

      <Header />

      <section className='w-full section-image' style={{ backgroundImage: 'url("/img/casting.png")' }}>
        <div className='w-full h-full flex items-center justify-center'>
          <div>
            <span className='text-xs sm:text-sm block font-medium text-gray-100 subtitle text-center'>CASTING</span>
            <h1 className='mt-1 text-xl sm:text-2xl font-bold text-white text-center'>キャスティング</h1>
          </div>
        </div>
      </section>

      <main className='max-w-screen-md mx-auto px-4'>
        <section className='relative pt-32'>
          {/* <p className='text-lg font-semibold text-center'>準備中</p>
          <p className='mt-2 text-sm text-center'>Coming Soon.</p> */}
          {/* <h1 className='mt-24 text-2xl font-bold text-center text-blue-600'>キャストを募集いたします！</h1> */}
          <div className='mt-8 text-center space-y-3'>
            <p>Imagination Serverでは、約2ぶりにメンバーを公募することになりました✨</p>
          </div>

          <h1 className='mt-24 text-2xl font-bold text-center'>こんな人を求めています</h1>
          <p className='mt-8'>この活動は「いつ、どこからでもディズニーにいける世界」をテーマとして、2016年に誕生したプロジェクトです。<br />メンバーは日本各地からこのビジョンに共感して集まっており、パークを忠実に再現するだけでなく、これまで5000人近くのユーザーに対し「どこでもディズニー」を提供してきました。<br />まずメンバーにはこのビジョンへの共感を求めていますが、もう一つ意識している特徴として、オンラインプロジェクトであることがあげられます。私たちには、住んでいる地域や年齢、価値観が異なる多様な人がフラットに集まる環境があります。<br />大切なのは、このような多様性に富むオンラインの特性を生かし、それぞれの強みや価値観を持って切磋琢磨しながらビジョンに向かおうとする意欲です。</p>
          <p className='mt-8'>とは言っても、私たちのビジョンは抽象的で、正解がありません。代わりにメンバー1人1人が、このビジョンに対して「想い」を持っています。<br />私たちは今、その一人一人の想いから生まれるアイデアや挑戦を通し、私たちなりの解を少しずつ導き出そうとしている最中です。私たちImagination Serverは、このように単にディズニーを再現しているプロジェクトではなく、一人一人が主役となって未だ答えのない問いに挑戦しているプロジェクトです。<br />みなさんの個性あふれる“Imagination”でこの活動がより面白く、インパクトのあるプロジェクトになることを楽しみにしています。</p>
          <p className='mt-12'>~ Imagination Server メンバー一同 ~</p>

          <h1 className='mt-24 text-2xl font-bold text-center'>応募資格</h1>
          <p className='mt-8'>次のAからF全てに該当する方</p>
          <ul className='mt-4 space-y-3'>
            <li>A. 年齢不問</li>
            <li>B. 活動(利用)規約に同意している</li>
            <li>C. 先述されているポリシーをよく読み、強く共感している</li>
            <li>D. Minecraft BE(スマホ版もしくはWin10版)を所持している</li>
            <li>E. ゲーマータグを所持していて、マルチプレイが可能な環境がある</li>
            <li>F. オンライン上で、テキストに限らず声を使ってのコミュニケーションが可能である</li>
          </ul>

          <h1 className='mt-24 text-2xl font-bold text-center'>募集期間</h1>
          <p className='mt-8 text-center'>2021.08.10 ~ 2021.08.20 21:00</p>

          <h1 className='mt-24 text-2xl font-bold text-center'>応募方法</h1>
          <p className='mt-8 text-center'><a className='underline text-blue-600 font-semibold' href="https://forms.gle/FJvtKrJtb4eXvWLQ8" target='_blank' rel='noopener noreferrer'>こちら</a> からフォームを入力してご応募ください。</p>

          <h1 className='mt-24 text-2xl font-bold text-center'>お問い合わせ</h1>
          <p className='mt-8'>Imagination Server キャスティングチーム (<a className='underline text-blue-600 font-semibold' href="mailto:castingline@imaginationserver.com">castingline@imaginationserver.com</a>) までメールでお問い合わせください。</p>

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
