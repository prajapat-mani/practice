const initial=0;

const change=(state= initial,action)=>{
    switch (action.type){
        case 'INCREMENT': return state+1;
        case 'DECREMENT': return state-1;
default :return state;
    }
}
const val={
    list:[]
}
console.log(val.list,"kkk");
const addnum =(state=val,action)=>{
switch(action.type){
case "additem": const{id,data}= action.payload;

    return{list:
        [...state.list,
        
    {
            // id:id,
            
            data:data
        }
        ]   
    }
    default : return state;
}

}







export default change;
export {addnum}
