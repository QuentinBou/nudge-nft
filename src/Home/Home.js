import React from 'react';
import MainNav from '../NavBars/MainNav';
import Airtable from 'airtable';

export default function Home() {

  return (
      <div>
        <header className='home-header'>
            <MainNav/>
            <h1>NudgeBase Project</h1>
        </header>
        <main>
            <h2>What's this project ?</h2>
            <div className='project-container'>
                <p>Hello team! Here is a small website (without design) to introduce everyone to the world of NFTs. You can find some important definitions, how to create / deploy an NFT on the blockchain and a short summary quiz.</p>
            </div>
        </main>
    </div>
    );
}
