
import './App.css';
import Header from './common/Header';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route, Outlet, NavLink } from 'react-router-dom';



function App() {

  return (

    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
