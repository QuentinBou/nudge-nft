import React from 'react';

export default function Rank() {

  let data = JSON.parse(sessionStorage.getItem('ranks'))

  return (
    <div className='rank-container hidden'>
        <div className='rank-head'>
            <h3>Username</h3>
            <h3>Date</h3>
            <h3>Score</h3>
        </div>
        <div className='body-rank'>
            {data.map(el => {
                return (
                    <div className='rank-card'>
                        <p>{el.username}</p>
                        <p>{el.date}</p>
                        <p>{el.score}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
