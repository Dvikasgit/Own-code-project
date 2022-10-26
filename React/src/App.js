import { Routes, Route } from "react-router-dom";
import "./App.css";
import Abc from "./Component/abc";
import DisplayRATE from "./Component/DisplayRATE.JS";
import Home from "./Component/Home";
import Hotel from "./Component/Hotel";
import Login from "./Component/Login";
import Nav from "./Component/Nav";
import RatingForm from "./Component/RatingForm";
import RatingTake from "./Component/RatingTake";
import Register from "./Component/Register";
import ViewIt from "./Component/ViewIt";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/view/:id" element={<ViewIt />} />
        <Route path="/rating" element={<RatingForm />} />
        <Route path="/rshow" element={<Abc />} />

        {/* <Route path="/Ratingt/:id" element={<RatingTake />} /> */}
      </Routes>
    </>
  );
}

export default App;
