import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState("home")
  return (
<main className="text-gray-400 bg-gray-900 body-font">
      <navbar/>
      <Header></Header>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>

    </main>
  );
}

export default App;
