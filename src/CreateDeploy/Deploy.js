import React from 'react';
import { Link } from 'react-router-dom';

export default function Deploy() {
  return (
      <div className='deploy-container'>
          <h3>Solana Blockchain</h3>
          <p>One of the most Blockchain used for NFTs at this moment is Etherum. But Solana is really intersting due to her performance and low cost, and so, we will use it.</p>
          <h3>More interesting Solana has something related to our project: Greener Ecosystem</h3>
          <p>
            The main Ethereum network still uses the Proof of Work (PoW) consensus algorithm for block mining, which requires high computing power, which is why maintaining the network leads to high electricity consumption - Ethereum already consumes more electricity than Belgium or Israel. Thus, Ethereum contributes to the increase in CO2 emissions into the atmosphere and, therefore, to the intensification of global warming.
          </p>
          <p>
            The Solana blockchain uses an improved Proof of Stake (PoS) algorithm that is 99.9% more energy efficient than PoW. This means Solana is simply better for the environment, making it more attractive to run NFT.
          </p>
          <h3>Easier to code.</h3>
          <p>Solana allow us to use a lot of programming language like Python, C, C++, Rust... and not only Solidity ! </p>

          <h3>What is Metaplex ?</h3>
          <p>Metaplex will allow us to create our NFTs 'store'.<br/> First let's take a look to deploy cost.<br/>
             For example, if we launch a 2000 NFTs collection, we will pay 7,95 SOL (662,95€).<br/>
             - 4,65 SOL for publish on ArWeave <br/>
             - 3,35 SOL for network costs <br/>
            You can go to <a href="https://feecalc.live/" target="_blank" rel="noreferrer">https://feecalc.live/</a> for calculate it !
          </p>
          <p>To upload our collection, we need to clone github project of Metaplex, then put our collection folder (10 png files and 10 json files) into Metaplex folder.</p>
          <p>Now we have already soon finish ! We just need one more command for run Metaplex script with Candy machine (Candy Machine is like a box where our NFTs will be put for upload).</p>
          <p>Just wait few minutes or hours depends of collection's size ! <br/>Choose price for one NFT and that's it !</p>
          <h2>Our Collection is now upload and ready to be sell !</h2>
          <p>If you want to test yourself on NFT knowledge just <Link to="/nudge-nft/quizz">click here</Link></p>
      </div>
  );
}
