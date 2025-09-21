import {useState,useEffect} from 'react'

const Fetch=()=>{

const[data,Setdata]=useState([])

useEffect(()=>{

fetch('https://dummyjson.com/products').
then((response)=>{return response.json()}).
then((result)=>{
  console.log(result.products);
  Setdata(result.products);

})


},[])



return(
<div>

{


  data.map((list,index)=>(
<div key={index}>
<h1 className='text-blue-500 font-bold' >{list.title}</h1>
<p className='text-pink-500' >{list.description}</p>
</div>
  ))
}


</div>

)



}

export default Fetch