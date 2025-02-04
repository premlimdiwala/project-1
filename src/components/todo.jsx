import { useState } from "react";

function Todo (){
    const [todo,setTodo] = useState("Hello World");

    return <>
    <input type="text" onChange={(event)=>{
        setTodo(event.target.value);
    }}/>
    <p>{todo}</p>
    </>
}
export default Todo;