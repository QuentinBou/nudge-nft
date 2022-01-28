import React from 'react';
import { Link } from 'react-router-dom';

export default function MainNav() {
  return (
      <nav className='main-nav'>
        <Link to="/">Home</Link>
        <Link to="/definitions/nft">What's NFT ?</Link>
        <Link to="/quizz">Quizz</Link>
      </nav>
  );
}
