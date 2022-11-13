import React, { useState } from "react";
import ReactDOM from "react-dom";

const VeggieCheckBox = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = event => {
    let name=event.target.name;
    let val=event.target.checked;
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked

    });
  };

  const veggies = ["Banana", "Mango", "Apple", "Orange", "Lemon"];
//   console.log(checkedItems,"juu")  



  let a=Object.entries(checkedItems)
   
  const arr=a.filter((val)=>{

         return val[1]===true        
        })

let selected=arr.map((value)=>{
    return value[0]
})

    // console.log(arr,"manish");

  return (
    <div>
      <h2>Which Veggies do you need?</h2>
      {
        veggies.map((item,index) => {
        
      return  <label>
          {item}
          <input
            type="checkbox"
            name={item}
            checked={checkedItems[item]}
            onChange={handleChange}
          />
          
        </label>
      })}
      <p>

{
    
}
i like these
{selected}
{/* {checkedItems?.Mango} */}

        {/* Selected veggies:{" "}
        {Object.entries(checkedItems).filter(([key, value]) => value)}{" "} */}
      </p>{" "}
      <br />
    </div>  
  );
};
export default VeggieCheckBox;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<VeggieCheckBox />, rootElement);
