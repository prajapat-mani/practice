import React, { useState } from "react";

const Sort = () => {
  const [arrayset1, setArrayset1] = useState([15, 17, 5, 20, 4, 3, 19, 16, 36, 98, 53, 22, 1]);
  //  a = [15, 17, 5, 20, 4, 3, 19, 16, 36, 98, 53, 22, 1];

  const ajjay = () => {
    // const arrayset = [15, 17, 5, 20, 4, 3, 19, 16, 36, 98, 53, 22, 1];
    var l = arrayset1.length;
    let i = 0;

arrayset1.map((value,index)=>{

    const newArray = arrayset1.map((val, ind, array) => {
        if (array[ind] > array[ind + 1]) {
          let swap = array[ind];
          array[ind] = array[ind + 1];
          array[ind + 1] = swap;
          return array[ind];
        } else {
          return array[ind];
        }
      });
  
  setArrayset1(newArray)

})



    // console.log(arrayset1, "kkkkkk");
  };

  return (
    <>
      <button onClick={ajjay}>try</button>
    </>
  );
};
export default Sort;
