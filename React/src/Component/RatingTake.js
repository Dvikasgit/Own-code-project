import React from "react";

export default function RatingTake() {
  return (
    <>
      <div>RatingTake</div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Rating
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="\">
              1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="\">
              2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="\">
              3
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="\">
              4
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="\">
              5
            </a>
          </li>
        </ul>
      </div>
      <br/>
        <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Feedback</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
</div>
    </>
  );
}
