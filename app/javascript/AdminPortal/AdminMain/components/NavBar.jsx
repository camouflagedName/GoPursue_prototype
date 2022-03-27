import React from "react";

export function NavBar(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light text-white" >
      <div className="container-fluid align-items-center">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder={`Search ${props.text}`} aria-label="Search" disabled />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}