import { useState, useEffect } from 'react';
const Fetchs = () => {
  const [photos, setPhotos] = useState([]);


async function fetchData(){

try{

let res=await fetch('https://dummyjson.com/products');
let data=await res.json();
//return data.products;
return setPhotos(data.products);
}

catch(err){
    console.log('see error',err)
}


}


  useEffect(() => {

fetchData();

   
  }, []); 
  return (
    <div>

      {photos.map((photo,index) => (
        <div key={index}>
       <h1 className='text-pink-400'>{photo.title}</h1>
        <p className='text-blue-400'>{photo.description}</p>
     </div>
      ))}
    </div>
  );
};
export default Fetchs;