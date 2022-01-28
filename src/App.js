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
        <Route path="/" element={<Home/>} />
        <Route path="/definitions" element={<Defs/>}>
          <Route path="/definitions/nft" element={<Nft/>} />
          <Route path="/definitions/digital-asset" element={<DigitalAsset/>} />
          <Route path="/definitions/blockchain" element={<Blockchain/>} />
        </Route>
        <Route path="/quizz" element={<Quizz/>} />
      </Routes>
    </div>
  );
}

export default App;
