import React from "react";

export class NavBar extends React.Component {

    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light text-white" >
            <div className="container-fluid align-items-center">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder={`Search ${this.props.text}`} aria-label="Search" disabled/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </nav>
        )
    }
}