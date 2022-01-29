import React, { useState } from 'react';

export default function QuizzBox() {
    const questions = [
        {
            "ask": "What means N-F-T ?",
            "response": ['<p>NON-FOUNDED-TASK</p>', '<p>NOT-FIRST-TOKEN</p>', '<p>NON-FUNGIBLE-TOKEN</p>','<p>NON-FAKE-TIKTOK</p>'],
            "win": "NON-FUNGIBLE-TOKEN"
        },
        {
            "ask": "Wich Blockchain will we use ?",
            "response": ['<p>Etherum', 'Solana', 'Ether', 'Solano'],
            "win": "Solana"
        },
        {
            "ask": "What are 'filters' ?",
            "response": ['<p>Instagram Effects', "NFT's Details", "Feature for search NFT"],
            "win": "NFT's Details"
        },
        {
            "ask": "Wich GIF has a 561,000$ value ?",
            "response": ['NyanCat', 'Just Do It', 'CrazyFrog', 'John Cena'],
            "win": "NyanCat"
        },
        {
            "ask": "Why Solana is 'relate' to our project ?",
            "response": ['Greener Ecosystem', 'Make Money', 'Get User Datas', 'Free-to-Use'],
            "win": "Greener Ecosystem"
        },
        {
            "ask": "Wich language can we use for DEPLOY NFTs ?",
            "response": ['HTML', 'Solidiy', 'A lot', 'Russian'],
            "win": "A lot"
        },
        {
            "ask": "Wich Blockchain has the most users ?",
            "response": ['Bitcoin', 'Etherum', 'Solana', 'NudgeBase'],
            "win": "Etherum"
        },
        {
            "ask": "NFTs can be stolen ?",
            "response": ['True, False'],
            "win": "True"
        },
        {
            "ask": "What is a Blockchain ?",
            "response": ['Data-base like', 'System to block peoples', 'A HTML Block', 'System to block money'],
            "win": "Data-base like"
        },
        {
            "ask": "Is Metaplex Free-To-Use ?",
            "response": ['True, False'],
            "win": "False"
        },
    ]
    const [username, setUsername] = useState("")
    const [score, setScore] = useState(0);
    const [date, setDate] = useState("");
    let count = 0;
    
    

    function startQuizz(){
        const container = document.querySelector('.play-quizz')
        console.log(container);
        if (count < 11){
            let asks = questions[count].response

            container.classList.add('container-show')

            container.innerHTML = `
                <div class="question-container">
                    <h3 class="question">${questions[count].ask}</h3>
                    <div class="asks">
                        ${asks.map(el => {
                            return el
                        }).join(' ')}
                    </div>
                </div>
            `
        }
    }

  return (
    <div className='play-quizz'>
        <button className="play" onClick={startQuizz}>
            <span className="play-text">Start Quizz</span>
            <span className="play-icon"><svg width="16" height="16" viewBox="2 2 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.596 10.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V6.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"/>
        </svg></span>
        </button>
    </div>
  );
}
