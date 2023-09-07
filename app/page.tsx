import { CategorySection, Hero, HeroBox, JoinedCompanies } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <HeroBox />
      <CategorySection />
      <JoinedCompanies />
    </main>
  )
}
