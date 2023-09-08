import { CategorySection, Hero, HeroBox, JoinedCompanies } from '@/components'
import React from 'react'

const LandingPage = () => {
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

export default LandingPage