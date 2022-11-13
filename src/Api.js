import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css"



const Api = () => {
    const [statee,setStatee]=useState();
    
    const navigate=useNavigate();

    
useEffect(()=>{
    
    func();
    

},[])

const func= async ()=>{
    
    await fetch ("https://epsoft-invoices.herokuapp.com/api/invoice/get-invoice", {
        method:"GET",
        headers:{ 
            "content-type":"application/json",
            'Authorization': localStorage.getItem(`token`).replaceAll('"', '')
        }

    }).then(response=> response.json())
    .then(response=>{

    
           setStatee( response)
           console.log(response);
        
     

// console.log(response ,"res");
    }).catch(error=>error)

}

const setting=()=>{

    navigate ('/setting')

}

  return (
   <>
<div className=' d-flex justify-content-center '>
<div className='d-flex  flex-column align-items-center'><h1>Documents</h1>
<h4>receive and send your documents</h4>
</div>
</div>
<div className='d-flex justify-content-end '>
<button className='pe-3 ps-3 color' onClick={setting}>Go to settings</button>

</div>


<div className='d-flex m-5'>

<h4 className='ms-5'>Created</h4>
<h4 className='ms-5'>Received</h4>
<h4 className='ms-5'>Sent</h4>


</div>
<hr/>
<h4>Received</h4>

  
<div >
<table className='wid'>
<tr className='border-1 border text-center'>
    <th >Logged user</th>
    <th className=''>Symbol</th>
    <th>ID</th>
    <th className=''>Created date</th>
</tr>


{

 statee?.data?.map((val,ind)=>{
    {/* console.log(val,"jhis") */}
    return(
        <>
        <tr className='border-1 border text-center'>
        <td>{val?.loggedUser} </td>
    <td >{val?.symbol}</td>
    <td>{val?.id}</td>
    <td>{val?.createdAt}</td>
    </tr> 
        </> 
    ) 
    
    
    

})
}




</table>
</div>
   </>
  )
}

export default Api
