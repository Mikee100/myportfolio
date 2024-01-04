
import './App.css';
import { Routes,Route,BrowserRouter} from "react-router-dom";
import About from './pages/About';
import Experience from './pages/Experience';
import Navbar from './pages/Navbar';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';



 function App() {

  return (
    <>
  <BrowserRouter>
    <main>





 <Routes>
   <Route path="/home" element={<Home /> }/>
    <Route path="navbar" element={<Navbar />} />
    <Route path="about" element={<About />}/>
    <Route path="experience" element={<Experience />} />
    <Route path="skills" element={<Skills /> }/>
    <Route path="contacts" element={<Contacts />}/>
    <Route path="projects" element={<Projects />}/>

</Routes>

<Navbar />
 </main>
 </BrowserRouter>

     <div>
    
  </div>
</>
  );

}

export default App;
