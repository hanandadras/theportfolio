import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState("home")
  return (
    <div>
      <Header></Header>
      <main className="text-gray-400 bg-gray-900 body-font">
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
