// header.js
import React, { createContext,useState ,useContext } from 'react';
// import SearchContext from './searchContext'; // Import the SearchContext
import logo from  './../images/logo.jpg';
import cart from  './../images/cart.png';
import search from  './../images/search.png';
import collapse from  './../images/collapse.png';

export const Searchcontext=createContext()
const Header = () => {
  const [ searchInput,setSearchInput ] = useState(''); 

  const handleInputChange = (event) => {
    setSearchInput(event.target.value); 
  };

  return (
    <Searchcontext.Provider value={"sdfsfs"}>
    <header className="header">
        <div className="headerLeft">
            <div className="logo">
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="searchbar">
                <input
                  type="text"
                  className="searchInput"
                  placeholder="What do you want to buy today?"
                  onChange={handleInputChange} 
                />
                <span className="closeIcon">&times;</span>
            </div>
        </div>
        <div className="headerRight">
            <nav>
                <ul>
                <li><a href="/store">Store</a></li>
                <li><a href="/">Account</a></li>
                <li><a href="/">Whish List</a></li>
                <li><a href="/">Basket <span><img src={cart} alt="cart" /></span></a></li>
                </ul>
            </nav>
        </div>

        <div className="collapsemenu">
            <a href="/"><img src={collapse} alt="collapse" /></a>
        </div>
    </header>
    </Searchcontext.Provider>
  );
}

export default Header;
