import React from "react";

export class Footer extends React.Component {

    render() {
        return (
            <div className="container-fluid h-auto d-flex align-items-end">
              <div className="row w-100 p-1">
                <hr/>
                <ul className="nav">
                  <div className="col-1">
                    <li className="nav-item">
                      <a className="nav-link link-dark text-muted" href="">Contact</a>
                    </li>
                  </div>
                  <div className="col-1">
                    <li className="nav-item">
                      <a className="nav-link link-dark text-muted" href="">Help</a>
                    </li>
                  </div>
                  <div className="col-1">
                    <li className="nav-item">
                      <a className="nav-link link-dark text-muted" href="">Terms</a>
                    </li>
                  </div>
                  <div className="col-3 offset-6">
                    <li className="nav-item text-end">
                      <a className="nav-link link-dark text-muted" href="">UncoverEdu</a>
                    </li>
                  </div>
                </ul>
              </div>
            </div> 
        )
    }
}