import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import './App.css'
import { Home } from "./components/Home";

function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        {/*header*/}
        <Home/>
      </div>
    </BrowserRouter>
 )

}

export default App
