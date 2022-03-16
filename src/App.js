import React from 'react';
import { About, Contact, Header, Navbar, Projects, ScrollToTop, Skills} from './components';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
