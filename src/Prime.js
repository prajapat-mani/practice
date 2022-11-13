import React, { useState } from "react";
import Sort from "./Sort";

const Primenumber=()=>{

const [prime ,setPrime]=useState()
    const add=(e)=>{
        setPrime(e.target.value)
    }

const check=()=>{
    

    for(  let i=2;i<prime; i++){

if(prime%i===0){
    return console.log(prime,"is not a prime number");

}else if(prime-1===i){
    return console.log(prime,"is a prime number")
}


    }


}

    return(
        <>

<input type="text" onChange={add}></input>
<button onClick={check}>prime check</button>

<hr/>
<Sort/>
        </>
    )
}
export default Primenumber;