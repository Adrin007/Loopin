import Features from './components/Features';
import Attention1 from './components/Attention1';
import Hero from './components/Hero';
import Integration from './components/Integration';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero/>
      <Attention1/>
      <Integration/>
      <Features/>
    </div>
  );
}
