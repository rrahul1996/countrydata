import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Country from "./components/Country";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/countries/:name" element={<Country/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
