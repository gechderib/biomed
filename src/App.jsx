import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";
import MyPatient from "./pages/MyPatient";
import Detail from "./pages/Detail";
import HowTo from "./pages/HowTo";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/addNew" element={<AddNew/>}></Route>
      <Route path="/mypatients" element={<MyPatient/>}></Route>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/howto" element={<HowTo/>} />
      <Route path="/about" element ={<About/>} />

    </Routes>
  );
}

export default App;
