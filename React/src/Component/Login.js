import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [body, setBody] = useState({
    email: "",
    password: "",
  });
  const onsubmit = async (data) => {
    console.log(data);

    let url = "http://localhost:3030/login";

    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: body.email, password: body.password }),
    });

    const content = await rawResponse.json();
    if (content.message === "login successfully") {
      alert("login successfully");
      nevigate("./hotel", {replace: true})

    }
    else{
        alert("Please check your password");
    }
    console.log(content);

    reset();
  };

  const nevigate  = useNavigate();
  return (
    <div className="App-content">
      <h1>Login Here!!</h1>
      <div className="login">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder=" Email"
              name="email"
              {...register("email", {
                onChange: (e) => {
                  setBody({ ...body, [e.target.name]: e.target.value });
                },
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
                onChange: (e) => {
                  setBody({ ...body, [e.target.name]: e.target.value });
                },
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

          <button onClick={()=> nevigate} type="submit" id="submitbtn" className="btn btn-success">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
