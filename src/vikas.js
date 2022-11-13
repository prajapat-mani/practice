
import React,{ useState } from "react";
import "./Vikas.css"



const quetion=(name)=>{

if(name==="manish"){

return function(topic){
    console.log(`hiii ${name}.what is ${topic}? .,plese explain us`);
}

}

if(name==="vikas"){

    return function(topic){
        console.log(`hiii ${name}.what is ${topic}? .,plese explain us    for each,map diff,,,,,,,,constructor,,,itrators,,,,`);
    }
    
    }

    if(name==="saddik"){

        return function(topic){
            console.log(`hiii ${name}.what is ${topic}? .,plese explain us`);
        }
        
        }

        
        else{
 return function(){
console.log("welcome to interview")

 }
        }


}
// quetion("manish")("os")
// quetion("vikas")("networking")

const a=quetion("manish");
a("os")
a("networking")
a("react")

function Vikas()

{


 
    }

export default Vikas;
