import React from 'react';
import { About, Header, Footer, Projects, Skills, Contact, ScrollToTop } from './components';
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import './App.scss';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <ScrollToTop /> 
      <Footer /> 
    </div>
  )
}

export default App
