import React from 'react';
import { Link } from 'react-router-dom';

export default function MainNav() {
  return (
      <nav className='main-nav'>
        <Link to="/nudge-nft/">Home</Link>
        <Link to="/nudge-nft/definitions/nft">What's NFT ?</Link>
        <Link to="/nudge-nft/how-to/create">How to ?</Link>
        <Link to="/nudge-nft/quizz">Quizz</Link>
      </nav>
  );
}
