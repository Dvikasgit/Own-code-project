import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Abc() {
const [rate , setRate] = useState([]);
const Display = () => {
    axios.get("http://localhost:3030/rating").then((res)=>{
        const newD = res.rate;
        setRate(newD);
    }).catch((err)=>{
        console.log(err)
    })
};

useEffect(()=>{
    Display();
},[])

  return (
    <>
    <div>abc</div>
     <h5 className="card-title">Rating : -{rate.hName} </h5>
    <h5 className="card-title">Feedback : -{rate.hName} </h5>
    </>
  )
}
