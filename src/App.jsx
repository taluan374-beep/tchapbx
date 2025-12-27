import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Architecture from './components/Architecture'
import HAArchitecture from './components/HAArchitecture'
import ApiDemo from './components/ApiDemo'
import PerformanceGrid from './components/PerformanceGrid'
import DashboardDemo from './components/DashboardDemo'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neon-cyan focus:text-navy-900 focus:rounded-lg"
      >
        Skip to main content
      </a>
      
      <Navbar />
      
      <main id="main-content" role="main">
        <Hero />
        <Architecture />
        <HAArchitecture />
        <ApiDemo />
        <PerformanceGrid />
        <DashboardDemo />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
