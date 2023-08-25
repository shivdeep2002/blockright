import './App.css';
import { Header } from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import
import { User } from './component/User';
import { Login } from './component/Login';
import { NFT } from './component/NFT';
import {Products} from"./component/Products";
import { Shop } from './component/Shop';
import { License } from './component/License';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/license" element={<License/>}/>
        </Routes>
        </div>

    </Router>
  );
}

export default App;
