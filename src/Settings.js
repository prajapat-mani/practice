import React, { useState } from "react";

const Settings=()=>{

    const [ setingdata,setSetingdata]=useState({
        organisationName:"",
        panNumber:""
        ,phoneNumber:"",
        postalCode:"",
        taxId:"",
        city:""
    });


    const nam=(e)=>{
        let name=e.target.name;
        let val=e.target.value;
        
        setSetingdata({...setingdata,[name]:val})
        
        
        }

    // console.log(setingdata,"hymanish");

    

//     const seting=async()=>{

// const {organisationName,panNumber,phoneNumber,postalCode,taxId,city}=setingdata;

//         await fetch ("https://epsoft-invoices.herokuapp.com/api/auth/setting-update-profile",{
//             method:"POST",
//             headers:{
//                 "content type":"application/json"
//             ,
//             'Authorization':localStorage.getItem('token').replaceAll('"', '')
//             },
//             body:JSON.stringify({
                
//                 organisationName,panNumber,phoneNumber,postalCode,taxId,city
//                  })
//         } 
//         ).then(response=>response.json())
//         .then(response=>{
//              alert("hy")
//             console.log(response,"hymanus");
//         }).catch(error=>error)


//     }




    const seting = async (e) => {
        e.preventDefault();
        const {organisationName,panNumber,phoneNumber,postalCode,taxId,city}=setingdata;
    
        await fetch(
            "https://epsoft-invoices.herokuapp.com/api/auth/setting-update-profile",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Authorization: localStorage.getItem(`token`).replaceAll('"', ""),
            },
    
            body: JSON.stringify({
                organisationName,panNumber,phoneNumber,postalCode,taxId,city 
            }),
          }
        )
          .then((response) => response.json())
          .then((response) => {
            // console.log(response, "this is response")
            
          })

          .catch((err) => {
            console.log(err);
          });

        }
return(
    <>

    <form onSubmit={seting}>
    <div className="text-center">
<h1>Settings</h1>
<p>Edit your organisation's setting and public profile</p>
</div>

   <h6> Contact Information</h6>
   <div className="d-flex m-4">
   <input class="form-control" onChange={nam} type="text" placeholder=" Organization name" name="organisationName" value={setingdata.organisationName}/>
   <input class="form-control ms-3" type="text" onChange={nam} placeholder="Pan number" name="panNumber" value={setingdata.panNumber}/>
</div>

<div className="d-flex m-4">
   <input class="form-control" type="text" onChange={nam} placeholder="phone number" name="phoneNumber" value={setingdata.phoneNumber}/>
   <input class="form-control ms-3" type="text" onChange={nam} placeholder="postal code" name="postalCode" value={setingdata.postalCode}/>
</div>

<div className="d-flex m-4">
   <input class="form-control" type="text" onChange={nam} placeholder="taxID" name="taxId" value={setingdata.taxId}/>
   <input class="form-control ms-3" type="text" onChange={nam} placeholder="city" name="city" value={setingdata.city}/>
</div>

<button type="submit">Submit</button>
</form>

    </>
)




}
export default Settings;