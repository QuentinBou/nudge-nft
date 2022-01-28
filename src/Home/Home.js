import React from 'react';
import MainNav from '../NavBars/MainNav';

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
                <p>Have to see with george wich text to put here :)</p>
            </div>
        </main>
    </div>
    );
}
