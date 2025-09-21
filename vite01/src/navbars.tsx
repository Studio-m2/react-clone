//import Link from "next/link";
// { Link } from 'react-router-dom';
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar=()=>{


    const [isOpen,setOpen]=useState(false); 

    const toggle=()=>{ 
    
    setOpen(!isOpen);
    
    }



    return (
<>



<nav className="w-full h-auto sm:h-12 md:h-16 lg:h-16  flex justify-between items-center  bg-gradient-to-b from-sky-100 to-sky-800 bg-blue-800  py-3 px-4 text-white ">
<div>
    <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl ">LOGO</h2>
    </div>

    <div className="hidden md:flex">
    <ul className="flex gap-8 text-xl ">
      
        <a href="#about"  className="hover:underline underline-offset-4">About</a>
        <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
        </ul>
    </div>


<div className="md:hidden flex text-xl sm:text-2xl  " ><button onClick={toggle} > 
    
{isOpen ? <AiOutlineClose /> :<GiHamburgerMenu/>    }
</button>




</div> 
   









</nav>


{isOpen &&(

<div className="md:hidden py-3 bg-gray-700 ">

        <a href="" className=" flex px-10 py-3 hover:bg-gray-300  hover:underline underline-offset-4  ">Home</a>
        <a href="" className="flex px-10 py-3 hover:bg-gray-300 hover:underline underline-offset-4">About</a>
        <a href="" className="flex  px-10 py-3 hover:bg-gray-300 hover:underline underline-offset-4">Contact</a>


</div>



)


}


</>

    );



    


}

export default Navbar