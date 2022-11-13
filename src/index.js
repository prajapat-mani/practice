import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Vikas from './vikas';
import Redux from './Redux';
import store from "./store";
import {Provider} from "react-redux"
import Manish from './Manish';
// store.subscribe(()=> console.log(store.getstate()));
import Api from './Api';
import Form from './Form';
import App2 from './App2';
import App3 from './App3';
import Newfile from './Newfile';
import Newpage from './Newpage';
import Newformm from './Newformm';
import Color from './Color';
import List from './List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 

<React.StrictMode>
  {/* <Vikas/> */}
{/* <Provider store={store}>
<Redux/>

</Provider> */}


{/* const cooler=500; */}
 
  {/* <Manish name="manish"
  ></Manish> */}
 <Color></Color>
 {/* */} 
 <List/>
  {/* <App></App> */}
  {/* <Newpage></Newpage> */}
  {/* <App2 cooler="500" /> */}
  {/* <Newfile></Newfile> */}
  {/* <Newformm></Newformm> */}


</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
