import './stylesheets/App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Library } from './components/Library';
import Favorites from './components/Favorites';
import Home from './components/Home';
import { Results } from './components/Results';
import { Result } from './components/Result';

const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route exact path="/Books" element={<Library/>} />
        <Route exact path="/Favorites" element={<Favorites/>} />
        <Route exact path="/Results" element={<Results/>} />
        <Route exact path="/Result" element={<Result/>} />
      </Routes>
    </div>
  )
}

export default App