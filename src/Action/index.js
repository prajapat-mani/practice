 export const incnumber=()=>{
return{
    type:"INCREMENT",
    
}
 }

 export const decnumber=()=>{
    return{
        type:'DECREMENT'
    }
     }

     export const addnum=(data)=>{
// console.log(data,"data");
        return{
type: "additem",
payload :data
}

        }
     
     
     export const dlt=()=>{

        return{
type: "dltitem",

        }
     }
     