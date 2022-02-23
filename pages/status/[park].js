import { useState } from 'react'
import { useRouter } from 'next/router'
import PageHeader from '@/components/page-header'
import SectionWrapper from '@/components/section-wrapper'
import Tab from '@/components/tab'

const items = {
  land: ['アトラクション'],
  sea: ['アトラクション', 'レストラン', 'ショップ']
}

export default function Status () {
  const router = useRouter()
  const { park } = router.query
  const [active, setActive] = useState(0)

  return (
    <>
      <PageHeader
        title='東京ディズニーランドの進行状況'
      />

      <SectionWrapper>
        <Tab items={items[park]} />
      </SectionWrapper>
    </>
  )
}
