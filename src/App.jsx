import { Route,Routes,Link , NavLink } from 'react-router-dom'
import './App.css'
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Support from './components/Support';
import MainHeader from './components/MainHeader'

function App() {
  
  return (
     <div className='App'>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="Support">Support</NavLink></li>
          <li><NavLink to="Contact">Contact Us</NavLink></li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Support' element={<Support></Support>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route> */}

        {/* nesting of route  */}

        <Route path='/' element={<MainHeader></MainHeader>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/Support' element={<Support></Support>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
        </Route>
         
      </Routes>
     </div>
  
  )
}

export default App;
