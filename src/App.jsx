import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features'; // <-- 1. Import Features

function App() {
  return (
    <div className="bg-dark-background min-h-screen text-dark-onSurface">
      <Navbar />
      <main>
        <Hero />
        <Features /> {/* <-- 2. Use the Features component */}
        
        {/* Placeholders for the remaining sections */}
        <div id="pricing" style={{ height: '100vh', paddingTop: '80px' }}>
          <h1 className="text-4xl text-center">Pricing Section Placeholder</h1>
        </div>
        <div id="faq" style={{ height: '100vh', paddingTop: '80px' }}>
          <h1 className="text-4xl text-center">FAQ Section Placeholder</h1>
        </div>
      </main>
    </div>
  );
}

export default App;