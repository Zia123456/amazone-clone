import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from './search_icon.png';
import basket from './grocery-basket.png';
// import { SearchIcon } from '@mui/icons-material';

import './header.css';

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header-search">
        <input type="text" className="header_searchInput" />
        <img src={searchIcon} className="search_icon" alt="search icon" />
        {/* <SearchIcon className="header_searchIcon" /> */}
      </div>
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header-optionOne">Hello Zia</span>
            <span className="header-optionTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header-optionOne">Returns</span>
            <span className="header-optionTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header-optionOne">Your</span>
            <span className="header-optionTwo">Prime</span>
          </div>
        </Link>
        <Link to="/login" className="header_link">
          <div className="header_oprionBasket">
            <img src={basket} className="basket" alt="shoping basket" />
            <span className="header-optionTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
