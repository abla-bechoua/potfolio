import './App.css';
import { Header } from './comp/navbar/header/Header';
import { Home } from './comp/navbar/header/Home';
import About from './comp/navbar/header/about/About';
import Skills from './comp/navbar/header/skills/Skills';
import { Services } from './comp/navbar/header/services/Services';
import { Qualification } from './comp/navbar/header/qualification/Qualification';
import { Projects } from './comp/navbar/header/projects/Projects';
import Contact from './comp/navbar/header/contact/Contact';
import { Footer } from './comp/navbar/header/footer/Footer';
import { ScrollUp } from './comp/navbar/header/scrollup/ScrollUp';
function App() {
  return (
    <div className="App">
       <Header/>
      <main className='main'>
       <Home/> 
       <About/> 
       <Skills/>
       <Services/>
       <Qualification></Qualification>
       <Projects/>
       <Contact/>
        
        
      </main>
      <ScrollUp/> 
      <Footer/>
    </div>
   
  );
}

export default App;
