import React from 'react';
import { Outlet } from 'react-router-dom';
import CreateDeployBar from '../NavBars/CreateDeployBar';
import MainNav from '../NavBars/MainNav';

export default function CreateDeploy() {
  return (
      <div className='create-deploy'>
          <MainNav />
          <h2>Let's take a look at how to Create and Deploy.</h2>
          <div className='stack-use'>
            <h3>Prerequisites :</h3>
            <ul>
                <li>Solana CLI: <a href="https://docs.solana.com/cli" target="_blank" rel='noreferrer'>https://docs.solana.com/cli</a></li>
                <li>Node.js: <a href="https://nodejs.org/en/" target="_blank" rel='noreferrer'>https://nodejs.org/en/</a> </li>
                <li>Metaplex: <a href="https://github.com/metaplex-foundation/metaplex" target="_blank" rel='noreferrer'>https://github.com/metaplex-foundation/metaplex</a></li>
                <li>Exiled Candy Machine: <a href="https://github.com/exiled-apes/candy-machine-mint" target="_blank" rel='noreferrer'>https://github.com/exiled-apes/candy-machine-mint</a></li>
            </ul>
            <p>*MacOS or Linux are really advised.</p>
          </div>
          <CreateDeployBar />
          <Outlet />
      </div>
  )
}
