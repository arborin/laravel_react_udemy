import './App.css';
import Nav from './nav';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WritePost from './components/WritePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/new-post" element={<WritePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
