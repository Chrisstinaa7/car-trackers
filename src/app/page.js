import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero'

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background-image.png')" }}
    >
      <Navbar />
      <HeroSection />
    </div>
  )
}
