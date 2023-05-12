import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Pages/Main';
import Products from './Pages/Products';
import Bookmark from './Pages/Bookmark';

function App() {
  return (
    <main className="w-full h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<Products />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
