import react, { useState } from "react";
import './App.css';
import Form from "./Form";
import Newform from "./Newform";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Api from "./Api";
import Settings from "./Settings";
import Newpage from "./Newpage";
import Newformm from "./Newformm";

function App() {

  

  return(

<>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Newformm/>} />
      <Route path="/Invoice" element={<Api></Api>}></Route>
      <Route path="/Newpage" element={<Newpage/>} />
      
    </Routes>
  </BrowserRouter>



</>



  )
  

}

export default App;

