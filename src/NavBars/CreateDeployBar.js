import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateDeployBar() {
  return (
      <nav className='secondary-nav'>
          <Link to="/nudge-nft/how-to/create">Create</Link>
          <Link to="/nudge-nft/how-to/deploy">Deploy</Link>
      </nav>
  );
}
