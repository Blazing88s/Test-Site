import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ArchitecturalVisualization from './pages/ArchitecturalVisualization';
import ProductVisualization from './pages/ProductVisualization';
import CustomModeling from './pages/CustomModeling';
import VirtualPhotography from './pages/VirtualPhotography';
import FullPortfolio from './pages/FullPortfolio';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/architectural-visualization" element={<ArchitecturalVisualization />} />
            <Route path="/services/product-visualization" element={<ProductVisualization />} />
            <Route path="/services/custom-modeling" element={<CustomModeling />} />
            <Route path="/services/virtual-photography" element={<VirtualPhotography />} />
            <Route path="/portfolio" element={<FullPortfolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}