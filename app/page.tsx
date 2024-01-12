import Ecosystem from '@/components/Ecosystem'
import FeaturesSection from '@/components/Featured'
import HeroSection from '@/components/HeroSection'
import InteractiveSection from '@/components/Keyboard'
import Projects from '@/components/Projects'
import FeatureGrid from '@/components/Projects'
import Segments from '@/components/Segments'
import ServicesSection from '@/components/Services'
import Socials from '@/components/Socials'
import TeamSection from '@/components/Team'
import TestimonialsSection from '@/components/Team'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <InteractiveSection /> */}
    
      <Segments />
     

      
      <TeamSection />
      <FeaturesSection />


      {/* <Socials /> */}



    </div>
  )
}
