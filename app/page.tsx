import HeroSection from '@/components/HeroSection'
import Segments from '@/components/Segments'
import TeamSection from '@/components/Team'
export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className='px-8'>
      <Segments />
      </div>
      <TeamSection />



    </div>
  )
}
