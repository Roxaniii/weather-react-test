import React from "react";

export default function Form() {
  return (
    <form>
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter City Name"
            autocomplete="off"
          />
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-dark" value="search">
            <i className="fas fa-search-location"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
