import React, { useState } from "react";
import Anagram from "./Manish";
import Primenumber from "./Prime";



const Color=()=>{

    const [col,setCol]=useState("green");

    const red=()=>{

setCol("red")
    }

    const black=()=>{

        setCol("black")
            }
    const blue=()=>{

        setCol("blue")
            }
            const yellow=()=>{

                setCol("yellow")
                    }
                    const green=()=>{

                        setCol("green")
                            }
                            const pink=()=>{

                                setCol("pink")
                                    }
                                    const grey=()=>{

                                        setCol("grey")
                                            }
                                            const change=(clr)=>{
                                                setCol(clr)

                                            }
const[state,setState]=useState()

const annn=(e)=>{
setState(e.target.value)

}



const check=(str1,str2)=>{
if(str1.length!==str2.length){
    return (false)
}


}
 check("hujds","kjdsj");







return(
    <>
<h1 style={{color:col}}>manish</h1>




<button onClick={()=>setCol("red")} className="">red</button>
<button onClick={black}>black</button>
<button onClick={()=>change("blue")}>blue</button>
<button onClick={yellow}>yellow</button>
<button onClick={green}>green</button>
<button onClick={pink}>pink</button>
<button onClick={grey}>grey</button>

<input type="text" onChange={annn}></input>
<button onClick={check}>check</button>


<br/>


<Primenumber/>
<hr/>
<Anagram></Anagram>


    </>
)


}
export default Color;