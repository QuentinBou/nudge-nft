import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DefsNav from '../NavBars/DefsNav';
import MainNav from '../NavBars/MainNav';
import nftvs from '../assets/img/nftvs.jpeg'
import crypto from '../assets/img/crypto-money.jpg'
import valuable from '../assets/img/valuable.jpg'

export default function Defs() {
  return (
      <div className='defs-page'>
          <MainNav/>
          <h1>First, let's see some definitions for understand NFTs concept.</h1>
          <DefsNav/>
          <Outlet/>
          <div className='defs-main'>
            <h2>If you have see definitions, let's take a look at NFT universe !</h2>
            <div className='details-container'>
              <div className='detail'>
                <h3>Non Fungible Token vs cryptocurrency</h3>
                <img src={nftvs} alt="nft against crypto" />
                <p>It is important to distinguish between cryptocurrencies and non-fungible tokens. Although both are based on blockchain technology, the fundamental differences can help us understand how NFTs work.</p>
                <p>The main difference is that cryptocurrencies are fungible. You can exchange one bitcoin for another bitcoin, for example. On the other hand, you cannot do this for an NFT. A non-fungible token is tied to a particular digital asset and cannot be replaced.</p>
              </div>

              <div className='detail'>
                <h3>Why are NFTs valuable?</h3>
                <img src={valuable} alt="value representation" />
                <p>As we mentioned before, a non-fungible token is essentially a certificate of ownership of a digital asset. The value comes from the collectability of this asset, as well as its potential future sale value. NFTs can be sold and traded.</p>
                <p>Again, the use of art is a great example of the value of NFTs. In February 2021, digital artist Beeple sold the NFT of his work Everydays – The First 5000 Days for a whopping $69.3 million through auction house Christie’s.</p>
              </div>
              
              <div className='detail'>
                <h3>Examples of NFT sales</h3>
                <p>It's not just NFT works that are selling well. Several notable NFT sell-offs have taken place in recent months, leading to speculation that there is a bubble in the market (more on that later).
                  <br/>Here are some examples of NFT sales:<br/>

                  <ul>
                    <li>The first tweet. Jack Dorsey, the founder of Twitter, sold the NFT of his first Tweet for $2.9 million.</li>
                    <li>The “Nyan Cat” GIF. The NFT of the colored GIF sold for 300 Ether (a cryptocurrency), which was worth around $561,000 at the time.</li>
                    <li>The “Charlie Bit Me” video. The popular video of a baby biting his brother's finger has been viewed over 800 million times on YouTube. The video's NFT was sold for around €700,000.</li>
                  </ul>  
                </p>
              </div>
              


              <div className='detail'>
                <h3>What can non-fungible tokens be used for?</h3>
                <p>Many people wonder if there are any use cases for NFTs. However, although the concept is still in its infancy, several potential uses have already emerged.<br/> We've selected some of the most notable below:<br/>
                  <ul>
                    <li>One of the uses of NFTs discussed in our open stage is for event tickets. The argument is that if the tickets are created using a non-fungible token, if you redeem that ticket, there is a record of that swap.<br/>
                        Therefore, there is no chance of someone selling tickets at a discount, stealing tickets or trying to use counterfeit tickets. Indeed, there is no chance of replacing the token on a blockchain associated with this ticket.
                    </li>
                    <li>
                      People have always enjoyed collecting keepsakes, trinkets, and the like. NFTs provide a way to guarantee authenticity, a sort of digital signature or stamp of approval.
                    </li>
                    <li>
                      NFTs allow players to own unique in-game items. Whether for fun, authenticity, or competitive purposes, these tokens can fuel in-game ecosystems.
                    </li>
                  </ul>
                </p>
              </div>
              

              <div className='detail'>
                <h3>The benefits of NFTs:</h3>
                <ul>
                  <li>They give artists ownership of digital assets. When content creators create a digital asset, an NFT gives them the opportunity to not only demonstrate authenticity, but also to profit from their work.</li>
                  <li>With things like memes getting widely distributed, this can mean a big revenue stream for the creator.</li>
                  <li>They are unique and can be collected. Many people enjoy the excitement of collecting a unique or rare item. NFTs lend additional legitimacy to collectible content, especially in the form of digital assets.</li>
                  <li>They are immutable. Since non-fungible tokens are blockchain-based, they can never be changed, erased, or replaced. Again, when it comes to proving the origin or authenticity of digital content, this is a valuable quality.</li>
                  <li>They can include smart contracts. Smart contracts are another feature of blockchain technology that is quite intriguing. Essentially, they can store instructions that are executed when certain conditions are met. So an NFT with a smart contract could give artists a percentage of the profit when the NFT is sold in the future.</li>
                </ul>
              </div>
              

              <div className='detail'>
                <h3>Disadvantages of NFTs</h3>
                <ul>
                  <li>It is a speculative market. The big question is whether NFTs have any real value. Is this a long term investment? Or just a passing fad? It's hard to say. Currently, the only value is based on the emotional quality of NFTs.</li>
                  <li>Digital assets can be copied. Just because someone owns the NFT of a digital asset doesn't mean copies of it don't exist. Artwork can be copied and pasted, GIFs retweeted thousands of times, and videos posted on various websites. Just because you own the NFT doesn't mean you have control of the property - you simply have a token of authenticity.</li>
                  <li>Environmental costs. Much has been said about the environmental impact of blockchain-based cryptocurrencies, such as Ether and Bitcoin. It takes a lot of computing power to enter data into a blockchain. It is debatable whether blockchain-based assets are sustainable.</li>
                  <li>They can be stolen. Although the technology behind NFTs is relatively secure, many exchanges and platforms are not. Thus, several cases of NFT theft have been reported after cybersecurity breaches.</li>
                </ul>
              </div>
              

              <p className='understand'>We hope you now understand what NFTs are and how they work. <br/> We have seen that there are several potential applications for non-fungible tokens in the real world, but are they a technology of the future? <br/> Imagine combining NFTs with Artificial Intelligence and Machine Learning technologies, Deep Learning, the possibilities then become endless.</p>

              <p className='wanna-quizz'>If you want to check your knowledge about NFT <span className='link'><Link to="/quizz">click here</Link></span></p>

            </div>
          </div>
      </div>
  )
}
