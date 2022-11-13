import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Newformm = () => {
    const Navigate=useNavigate();

const [state,setState]=useState({
    email:"",
    password:"",
});




const nam=(e)=>{
let name=e.target.name;
let val=e.target.value;

setState({...state,[name]:val})


}


const save = async (e) => {
    e.preventDefault();

const {email,password}=state;
    await fetch("https://epsoft-invoices.herokuapp.com/api/auth/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",

      },

      body:JSON.stringify({
email,password

 })
      
    })
      .then((response) => response.json())
      .then((response) => {

        response.success===true? Navigate("/Newpage"):alert(response.message)


        localStorage.setItem("token", JSON.stringify(response?.data?.[0]?.token))
    })
    .catch((err) => {

    });
};


return (
  <>
 <form onSubmit={save}>   
Username<input onChange={nam} type="text" name="email" value={state.email}/>

password<input onChange={nam} type="password" name="password" value={state.password}/>

<button type="submit">login</button>




</form>
  </>
)
}

export default Newformm;

