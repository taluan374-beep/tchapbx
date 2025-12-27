import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Architecture from './components/Architecture'
import ApiDemo from './components/ApiDemo'
import PerformanceGrid from './components/PerformanceGrid'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Architecture />
        <ApiDemo />
        <PerformanceGrid />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
