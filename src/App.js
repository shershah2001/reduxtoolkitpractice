import './App.css';
import Navbar from "./components/Navbar.js";
import Create from './components/Create.js';
import { Route, Routes } from 'react-router-dom';
import Read from './components/Read.js';
import EditData from "./components/EditData.js"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Create />} />
        <Route path='/read' element={<Read />} />
        <Route path='/editdata/:id' element={<EditData />} />
      </Routes>


    </div>
  );
}

export default App;
