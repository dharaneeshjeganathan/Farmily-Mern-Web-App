import { useState } from 'react';
import imagedg from './assets/download.jpg'
function Box()
{
    const [count, setCount] = useState(10);

  function increment ()  {
    console.log("increment");
    setCount(count + 1);
  };
    return(
        <>
        <div className= "card">
<img  className="card-image" src={imagedg} alt="profile"></img>
<h2 className="card-title">Agri Product</h2>
<p className="card-text">Price: Rs.500</p>
<p className="card-text">Description: Product Description.</p>
<p className="card-text">count:{count}</p>
   
    <div className="card-title"><button className='buttoncard' onClick={increment}>+</button></div> 
    
    </div> 
    </>
        
    );
}
export default Box;