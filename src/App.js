import React from 'react';
// import { Contact, , ScrollToTop, Skills} from './components';
import { About, Header, Footer, Projects } from './components';
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
        <Projects />
        {/* <Skills />
        <Contact /> */}
      </main>
{/* 
      <ScrollToTop /> */}
      <Footer /> 
    </div>
  )
}

export default App
