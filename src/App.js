import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Defs from './Defs/Defs';
import Nft from './Defs/Nft';
import DigitalAsset from './Defs/DigitalAsset';
import Blockchain from './Defs/Blockchain';
import Quizz from './Quizz/Quizz'
import CreateDeploy from './CreateDeploy/CreateDeploy';
import Create from './CreateDeploy/Create';
import Deploy from './CreateDeploy/Deploy';
import Airtable from 'airtable';

function App() {
  let rankArray = [];
 
    async function getRanks(){
        const base = new Airtable({apiKey: 'keyE3fByDcYYFMFNE'}).base('appSha6Pbiv33ROUk');
        base('Quizz_table').select({
            view: 'Grid view'
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }
            records.forEach(function(record) {
                let data = {
                    "username": record.get('Username'),
                    "date": record.get('Date'),
                    "score": record.get('Score')
                }
                rankArray.push(data)
            });
        });
    }

    getRanks()
    setTimeout(() => {
        sessionStorage.setItem('ranks', JSON.stringify(rankArray))
        console.log(rankArray);
    }, 250);

  return (
    <div className="App">
      <Routes>
        <Route path="/nudge-nft/" element={<Home/>} />
        <Route path="/nudge-nft/definitions" element={<Defs/>}>
          <Route path="/nudge-nft/definitions/nft" element={<Nft/>} />
          <Route path="/nudge-nft/definitions/digital-asset" element={<DigitalAsset/>} />
          <Route path="/nudge-nft/definitions/blockchain" element={<Blockchain/>} />
        </Route>
        <Route path="/nudge-nft/how-to" element={<CreateDeploy />}>
          <Route path="/nudge-nft/how-to/create" element={<Create />} />
          <Route path="/nudge-nft/how-to/deploy" element={<Deploy />} />
        </Route>
        <Route path="/nudge-nft/quizz" element={<Quizz/>} />
      </Routes>
    </div>
  );
}

export default App;
