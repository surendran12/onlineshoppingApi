
import React from 'react';
import './App.scss';
import Home from './component/home';
import Header from './component/header';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
        <div className='container'>
          {/* <Header/> */}
          <Home />
          <Footer />
        </div>
    </div>
  );
}

export default App;
