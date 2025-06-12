import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardGrid from './components/CardGrid';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <CardGrid />
      </main>
    </div>
  );
}

export default App;
