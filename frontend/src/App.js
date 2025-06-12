import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardGrid from './components/CardGrid';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <CardGrid />
            </>
          } />
          {/* Add other routes as needed */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
