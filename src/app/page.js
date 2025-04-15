import Hero from '@/components/Hero';
import Team from '@/components/Team';
import Service from '@/components/Service';
import Certificate from '@/components/Certificate';
import Benefit from '@/components/Benefit';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Team />
      <Service />
      <Certificate />
      <Benefit />
      <Footer />
    </main>
  )
}