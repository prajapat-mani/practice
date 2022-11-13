import react, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { incnumber,decnumber } from "./Action/index";
import { addnum } from "./Action/index";


const Redux=()=>{


    const [num,setNum]=useState('')


const mystate=useSelector((state)=> state);
const dispatch=useDispatch();
    return(

<>

<button onClick={()=>dispatch(incnumber())}
//  title="INCREMENT"
 >+</button>
<input type="text" value={mystate.change}/>
<button onClick={()=>dispatch(decnumber())}
//  title="DECREMENT"
 >-</button>



<h1>

<input type="text" onChange={(e)=> setNum(e.target.value)}/>
<button onClick={()=>dispatch(addnum(num))}>add</button>

{num}

</h1>

</>



    )
}
export default Redux;


