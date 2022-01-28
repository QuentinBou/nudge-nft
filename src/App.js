import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Defs from './Defs/Defs';
import Nft from './Defs/Nft';
import DigitalAsset from './Defs/DigitalAsset';
import Blockchain from './Defs/Blockchain';
import Quizz from './Quizz/Quizz'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/nudge-nft/" element={<Home/>} />
        <Route path="/nudge-nft/definitions" element={<Defs/>}>
          <Route path="/nudge-nft/definitions/nft" element={<Nft/>} />
          <Route path="/nudge-nft/definitions/digital-asset" element={<DigitalAsset/>} />
          <Route path="/nudge-nft/definitions/blockchain" element={<Blockchain/>} />
        </Route>
        <Route path="/nudge-nft/quizz" element={<Quizz/>} />
      </Routes>
    </div>
  );
}

export default App;
