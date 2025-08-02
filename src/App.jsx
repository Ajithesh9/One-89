import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing'; // <-- 1. Import Pricing

function App() {
  return (
    <div className="bg-dark-background min-h-screen text-dark-onSurface">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing /> {/* <-- 2. Use the Pricing component */}
        
        {/* Placeholder for the last section */}
        <div id="faq" style={{ height: '100vh', paddingTop: '80px' }}>
          <h1 className="text-4xl text-center">FAQ Section Placeholder</h1>
        </div>
      </main>
    </div>
  );
}

export default App;