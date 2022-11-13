import React, { useState } from "react";


const Anagram=()=>{

const [add,setAdd]=useState()
const Check=()=>{
  


  let newString = "";
  for (let i = add.length - 1; i >= 0; i--) {
      newString += add[i];

  

  
     
// console.log(newString);
  }
if(add===newString){
console.log(add," is anagram");

}
else{
  console.log(add,"is not anagram");
}


}

    return <div>
  
  
  <input type="text" onChange={(e)=>setAdd(e.target.value)}></input>
<button onClick={Check}>anagram check</button>

    </div>
  }
  export default Anagram;