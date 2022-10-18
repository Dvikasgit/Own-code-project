import axios from 'axios';
import React, {useEffect, useState} from 'react'

export default function RatingS() {
const [data , setData]  = useState([]);

const GetDataR = () =>{
    axios.get("http://localhost:3030/rating").then((res)=>{
        console.log(res)
        const myrating = res.data
        setData(myrating)

    }).catch((err)=>{
        console.log(err)
    })
}
    useEffect(()=>{
        GetDataR();
    },[])

  return (
    <>
    
   
    <div>RatingS</div>

    {
        data.map((item) =>
        <div id="first" key={item._id} className="card">
           <div className="card-body">
             <h5 className="card-title">rating{item.rate}</h5>
             <h5 className="card-title">feedback{item.feedback}</h5>
           </div>
         </div>
   )
     }
      </>
  )
}
