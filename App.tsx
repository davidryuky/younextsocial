import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OrderSection } from './components/OrderSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { FaqSection } from './components/FaqSection';
import { SocialIconsSection } from './components/SocialIconsSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-slate-100 font-sans overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <OrderSection />
        <AdvantagesSection />
        <FaqSection />
        <SocialIconsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;