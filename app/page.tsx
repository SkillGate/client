import { CategorySection, Hero, HeroBox, JoinedCompanies, CategoryCarousel } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <HeroBox />
      <CategorySection />
      {/* <CategoryCarousel /> */}
      <JoinedCompanies />
    </main>
  )
}
