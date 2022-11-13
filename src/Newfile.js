import react, { useRef, useState } from "react";

const Newfile=()=>{

const name=useRef()

const submit=(e)=>{
e.preventDefault()
console.log(name.current.value);
}

    const [state, setState]=useState();
const [newState, setNewState]=useState();

return(
    <>
<form action="" onSubmit={submit}>


<input type="text"  ref={name}></input>
<br/><br/>
<button>submit</button>

</form>
        
    </>
)

}
export default Newfile;