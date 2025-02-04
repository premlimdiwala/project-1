import { useState } from "react";

function Counter (){
    const [count,setCount] = useState(0);

    return <>
    <hr /><hr />
    <h1>Counter</h1>
    <button onClick={()=>{
        setCount(count + 1);
    }}>+</button>
    <h1>{count}</h1>
    <button onClick={()=>{
        if(count<=0){
            return 0
        }else{
        setCount(count -1);}
    }}>-</button><br/><br/>
    <button onClick={()=>{
        setCount(0);
    }}>Reset</button>
    </>
}

export default Counter;