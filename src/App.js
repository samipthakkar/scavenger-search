import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Router from './components/Router'
import Footer from './components/Footer'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme = {darkTheme} setDarkTheme = {setDarkTheme}/>
        <Router />
        <Footer />
      </div>
    </div>
  );
}

export default App;
