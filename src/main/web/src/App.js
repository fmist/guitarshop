import './App.css';
import ShopList from "./pages/ShopList";
import "bootstrap/dist/css/bootstrap.css"
import Menubar from "./pages/Menubar";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import EditBar from "./pages/EditBar";
import InputBar from "./pages/InputBar";

function App() {
  return (
      <div className="App">
            <Menubar/>
          <Routes>
              <Route path="/" element={<ShopList/>}></Route>
              <Route path="/add" element={<InputBar/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/edit/:id" element={<EditBar/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
