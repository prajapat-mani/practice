import React, { useState } from "react";
import { useEffect } from "react";
import App3 from "./App3";
import Form from "./Form";


const App2 =(props)=>{

 const [time , setTime] = useState();
 const [add,setAdd]=useState([])
const [color,setColor]=useState(false)

 
 const delet=(getindex)=>{
   const x= add.filter((value,index)=>{

        return getindex!=index;

    })
    return setAdd(x)
 }



const data=(e)=>{

setTime(e.target.value)

}

const adddata=()=>{
    setAdd([...add,time])
}


const change=(id)=>{

add.map((item, index)=>{
if(index===id){
return setColor(true)
}

})


}


    return(
        <>
{/* <h1>{props.cooler}</h1>
\ */}



<input type="text" onChange={data}></input>

<button onClick={adddata}>Add</button>

<br/>

<input type="email" placeholder="enter email"></input>
<input type="password" placeholder="enter password"></input>


<ol>
{
add.map((val,ind)=>{

   return <li>

<h1 className={color===true?"red":"black"}>{val}</h1>
<button onClick={()=>delet(ind)}>x</button>
<button onClick={()=>change(ind)}>Change</button>
</li>
})
   



}
</ol>

<App3 apliance={props.cooler}></App3>

{/* <Form></Form> */}

        </>
    )
}

export default App2;