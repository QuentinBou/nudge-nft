import React from 'react';
import { Link } from 'react-router-dom';

export default function DefsNav() {
  return (
      <nav className='defs-nav'>
          <Link to="/nudge-nft/definitions/nft">NFT</Link>
          <Link to="/nudge-nft/definitions/digital-asset">Digital Asset</Link>
          <Link to="/nudge-nft/definitions/blockchain">Blockchain</Link>
      </nav>
  );
}
