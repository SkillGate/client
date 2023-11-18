import { CategorySection, Hero, HeroBox, JoinedCompanies } from '@/components'
import About from '@/components/About'
import Advertisements from '@/components/Advertisments'
import Contact from '@/components/Contact'
import React from 'react'

const LandingPage = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Advertisements />
      <Contact />
      {/* <HeroBox /> */}
      {/* <CategorySection /> */}
      {/* <CategoryCarousel /> */}
      {/* <JoinedCompanies /> */}
    </main>
  )
}

export default LandingPage