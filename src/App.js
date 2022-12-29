import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
