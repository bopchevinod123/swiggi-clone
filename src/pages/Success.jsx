// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
// import {PropagateLoader} from "react-spinners"

// const Success = () => {
  
//   const [loading, setLoading] = useState(true);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setLoading(false);
//     },3000)
//   },[])

//   return (
//     <div className='flex flex-col items-center justify-center h-screen'>

//     {loading ? (<PropagateLoader color="#36d7b7" />) : (<div>
//       <h2 className='text-3xl font-semibold mb-4 text-center'>Order Succesful!</h2>
//       <p>Your order has been successfully placed</p>
//       </div>) }

      

//     </div>
//   )
// }

// export default Success





import React, { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    // Clean up the timer if the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className='text-3xl font-semibold mb-4 text-center'>Order Successful!</h2>
          <p>Your order has been successfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
