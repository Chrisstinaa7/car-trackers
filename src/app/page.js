import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero';
import HowItWorks from '@/components/howitworks';
import VideoAppraisal from '@/components/VideoAppraisal';

export default function Home() {
  return (
    <div className="flex flex-col">

      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/background-image.png')" }}
      >
        <Navbar />
        <HeroSection />
      </div>
      <HowItWorks />
      <VideoAppraisal />
    </div>
  );
}
