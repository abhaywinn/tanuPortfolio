import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {Suspense, lazy} from 'react'
import Loading from './Components/Loading'

function App() {
 const Home = lazy(() => import('./Components/Home'));
 const About = lazy(() => import('./Components/About'));
 const Projects = lazy(() => import('./Components/project/Projects'));
 const Netflix_project = lazy(() => import('./Components/project/Netflix_project'));
 const Chat_project = lazy(() => import('./Components/project/Chat_project'));
 const Contact = lazy(() => import('./Components/Contact'));
 
  return (
    <>
   <Navbar/>
  <BrowserRouter>
  <Suspense fallback={<Loading/>}>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/project' element={<Projects/>}/>
  <Route path='/project/netflix' element={<Netflix_project/>}/>
  <Route path='/project/chat' element={<Chat_project/>}/>
  <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </Suspense>
  </BrowserRouter>
  <Footer/>

    </>
  )
}

export default App