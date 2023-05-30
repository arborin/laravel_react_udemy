import { useState } from 'react';
import './App.css';
// import Nav from './nav';
// import Home from './components/Home';
// import About from './components/About';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import WritePost from './components/WritePost';

function App() {



  const [count, increment] = useState(0)

  const clikcMe = () => {

    increment(count + 1)
  }

  return (
    <div className="App">
      <button onClick={() => clikcMe()}>Increase {count}</button>
      {/* <BrowserRouter>

        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/new-post" element={<WritePost />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
