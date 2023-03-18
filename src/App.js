import {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from "react-router-dom";

import * as gameService from "./services/gameService";

import { Catalog } from "./components/catalog/Catalog";
import { CreateGame } from "./components/createGame/CreateGame";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { GameDetails } from "./components/gameDetails/GameDetails";

function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
    .then(result => {
      setGames(result);
    })
  }, []);

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);
    setGames(state => [...state, newGame]);
    navigate('/catalog');
  }

  return (
    <div id="box">
      <Header/>
      <main id="main-content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/create-game" element={<CreateGame onCreateGameSubmit={onCreateGameSubmit}/>} />
            <Route path="/catalog" element={<Catalog games={games}/>} />
            <Route path="/catalog/:gameId" element={<GameDetails/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
