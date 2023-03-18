import {Routes, Route} from "react-router-dom"
import { Catalog } from "./components/catalog/Catalog";
import { CreateGame } from "./components/createGame/CreateGame";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";

function App() {
  return (
    <div id="box">
      <Header/>
      <main id="main-content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/create-game" element={<CreateGame/>} />
            <Route path="/catalog" element={<Catalog/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
