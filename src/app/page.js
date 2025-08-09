import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero';
import HowItWorks from '@/components/howitworks';
import VideoAppraisal from '@/components/VideoAppraisal';
import Box from '@/components/box';
import ReviewsSection from '@/components/reviewsection';

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
      <Box />
      <ReviewsSection />
    </div>
  );
}
