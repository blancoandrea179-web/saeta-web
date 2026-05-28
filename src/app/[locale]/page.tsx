import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Team from '@/components/sections/Team'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import News from '@/components/sections/News'
import Languages from '@/components/sections/Languages'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import SocialButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Stats />
        <News />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <SocialButton />
    </>
  )
}