import React from 'react';
import MainNav from '../NavBars/MainNav';
import QuizzBox from './QuizzBox';
import Rank from './Rank';

export default function Quizz() {
  return (
      <div className='quizz-container'>
          <MainNav />
          <h1>Hi team ! Welcome to a simply Quizz about NFTs !</h1>
          <h2>Coming soon...</h2>
          {/* <QuizzBox /> */}
          <Rank />
      </div>
  )
}
