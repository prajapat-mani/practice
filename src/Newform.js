import React, { useState } from "react";

const Newform=()=>{

const [state,setState]=useState({
    email:"",
    password:""
});
console.log(state);
const nam=(e)=>{
    let name=e.target.name;
    let val=e.target.value;
    
    setState({...state,[name]:val})
    
    
    }


const Submit=async(e)=>{
    e.preventDefault();

    alert("hello")
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
        // console.log(response,"hhhsgud");
    //  response.success===true? Navigate("/Invoice"):alert(response.message)
    //  const tok()=response?.data?.[0]?.token;
    //  console.log(tok,"kol");
    alert("hii")
     localStorage.setItem("token", JSON.stringify(response?.data?.[0]?.token))
        })
        .catch((err) => {
  
        });
    };
  
  





    return(
        <>
<from onSubmit={Submit}>
Email<input onChange={nam} type="email" name="email" value={state.email}></input>
Password<input onChange={nam} type="password"  name="password" value={state.password}></input>
<button onClick={Submit}>submit</button>
</from>

        </>
    )
}
export default Newform;