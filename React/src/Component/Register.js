import "../App.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = async (body) => {
    console.log(body)
    let url ="http://localhost:3030/register"

    const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({fname: body.fname, email:body.email,password:body.password})
  });
  const content = await rawResponse.json();
  if(content.message==="registered"){
    alert("registered successfully")
    nevigate("./hotel", {replace: true})
  }
  

  console.log(content);
    
    
    reset()   
  };


  const nevigate  = useNavigate();

  return (
    <div className="App-content">
      <h1>Register Here!!!!!!!</h1>
      <div className="Mybox">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="form-group">
            <label htmlFor="fname">Enter First Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="First Name"
              name="fname"
              {...register("fname", {
                required: { value: true, message: "Enter First Name" },
                minLength: { value: 3, message: "Enter minimum 3 Character" },
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: "Enter Character only",
                },
              })}
            />
            {errors.fName && (
              <span>
                <small style={{ color: "red" }}> {errors.fName.message} </small>{" "}
              </span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder=" Email"
              name="email"
              {...register("email", {
                required: { value: true, message: "Enter Email" },
              })}
            />
            {errors.email && (
              <small style={{ color: "red" }}> {errors.email.message} </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder=" Password"
              name="password"
              {...register("password", {
                required: { value: true, message: "Enter Password" },
                minLength: { value: 3, message: "Enter minimum 3 Character" },
                maxLength: { value: 8, message: "Enter maximum 8 Character" },
              })}
            />
            {errors.password && (
              <small style={{ color: "red" }}>
                {" "}
                {errors.password.message}{" "}
              </small>
            )}
          </div>
          
          <br />

          <button
          onClick={()=> nevigate}
            type="submit"
            id="submitbtn"
            className="btn btn-success"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
