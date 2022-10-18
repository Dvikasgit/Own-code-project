import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Hotel.css';
import axios from 'axios'

export default function Hotel() {
    const [data , setData] = useState([]);

    const getData = () => {
        axios.get("http://localhost:3030/getd").then((res)=>{
            // console.log(res)
            const mydata = res.data
            setData(mydata)
          

        }).catch((error)=>{
             console.log(error)
        })
    }

    useEffect(()=>{
    getData()

    },[])

  return (
    <>
    <div>This is hotal page</div>
  {
     data.map((item) =>
     <div id="first" key={item._id} className="card">
        <img style={{height : "340px"}} src={item.hotelImg} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Hotel-Name : - {item.hName}</h5>
         
          <br/>
          
          <button>
            <Link to={`/view/${item._id}`}>View-More</Link>
          </button>
        </div>
      </div>
)
  }
    </>
  )
}
