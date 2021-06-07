import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Wallet = () => (
  <div className='wallet'>
    <div className="line1">
      Network:
      <span title="4" className="networkTitle">RINKEBY</span>
      <span title="ETH Wallet Balance" className="balance">1.128800 ETH</span>
    </div>
    <div className="accountId">0xd927f978d486528f5d0ac5af9208570829d8ca96</div>
  </div>
);

const Header = (props) => {
  return (
    <div>
      <div style={{ position: 'absolute', right: 20, top: 0, textAlign: 'right'}}>
        <Wallet />
      </div>
      <div style={{ color: 'gray', textAlign: 'center' }}>React Application with Web3 Usage</div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName='active' to={`/me`}>
              My Profile
            </NavLink>
          </li>
          <li style={{ flex: 1 }}></li>
          <li><NavLink activeClassName='active' to={`/about/100`}>How to Play</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
