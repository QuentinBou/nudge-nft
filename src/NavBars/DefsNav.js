import React from 'react';
import { Link } from 'react-router-dom';

export default function DefsNav() {
  return (
      <nav className='defs-nav'>
          <Link to="/definitions/nft">NFT</Link>
          <Link to="/definitions/digital-asset">Digital Asset</Link>
          <Link to="/definitions/blockchain">Blockchain</Link>
      </nav>
  );
}
