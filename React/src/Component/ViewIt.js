import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../Hotel.css";

export default function ViewIt() {
  const id = useParams();
  const _id = id.id;

  const [data, setData] = useState([]);

  const getDataById = () => {
    axios.get(`http://localhost:3030/singleGet/${_id}`)
      .then((res) => {
        // console.log("res",res.data);
        const myData = res.data;
        setData(myData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataById();
  }, []);
  console.log(data);

  
  return (
    <>
      <div>ViewIt</div>

      {
        <div key={data._id} className="card">
          <div className="d-flex justify-content-between">
            <img
              style={{ height: "340px" }}
              width="500px "
              src={data.hotelbed}
              className="card-img-top p-2"
              alt="..."
            />
            <img
              style={{ height: "340px" }}
              src={data.hotelpool}
              className="card-img-top p-2"
              alt="..."
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Hotel-Name : - {data.hName}</h5>
            <h5 className="card-title">Address : - {data.address}</h5>
            <h5 className="card-title">Phone-Number : - {data.hotelNumber}</h5>
            <h5 className="card-title">Reason To Choose : - {data.reason}</h5>
           

            <button>
              {/* <Link to={`/Ratingt/${data._id}`}>View-More</Link> */}
              <Link to='/rating'>Give-rating</Link>

            </button>
          </div>
        </div>
      }
    </>
  );
}
