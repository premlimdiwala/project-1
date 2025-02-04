import { useState } from "react";

function Toggle (){
    const [toggle,setToggle] = useState("show");
    return <>
    <button  onClick={()=>{
        if(toggle === "hide"){
        setToggle("show");
        let tag=document.querySelector("p");
          console.log(tag);
          tag.style.display="block";
    }
        
        else{
            setToggle("hide");
          let tag=document.querySelector("p");
          console.log(tag);
          tag.style.display="none";
            
        }

    }}>{toggle}</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere veritatis nemo minus. Quidem officia expedita ratione amet. Id cupiditate iusto, nesciunt iure repellendus velit veritatis quo? Aliquam, dolore provident.</p>
    </>
}

export default Toggle;