import axios from 'axios';
import React, { useState } from 'react'


export default function RatingForm() {

    const [body , setBody] = useState({
        rate : "",
        feedback : ""
    });
   
    const handleChange=(e)=>{
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
        console.log("body",body)
    }
    

    const handleSubmit = async (e) => {
        try {
            console.log("onSubmit")
            const data = await axios.post("http://localhost:3030/createRate",{
                rate: body.rate,
                 feedback: body.feedback 
            })
            console.log("data",data)
        } catch (error) {
            console.log(error)
            
        }

    }
  return (
    <>
    
    <div>RatingForm</div>

    <form >
          <div className="form-group">
            <label htmlFor="email">Enter FeedBack</label>
            <input
              type="text"
              className="form-control"
              placeholder=" enter feedback"
              name="feedback"
              onChange={handleChange}
              />
              
           
          </div>

          <div className="dropdown">
            <h3>Select Rating</h3>
          <select name='rate' onChange={handleChange}>
          <option value="">select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

        </select>

</div>

          <button type="button" className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
        </form>






    </>
  )
}
