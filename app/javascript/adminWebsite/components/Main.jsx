import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { NavBar } from './NavBar';
import { ErrorPage } from './ErrorPage';


export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adminName: localStorage.getItem("admin")
    }
  }

  render() {
    if(this.state.adminName) {
      return (

          <div className="container-fluid vh-100">
            <div className="row vh-100">
              <Sidebar />

              <div className="container d-flex col-10 g-1 flex-column">
                <NavBar text="users and careers"/>

                <br/>
                <div className="text-center justify-content-center">
                  <h2>Welcome {this.state.adminName}</h2>
                  <hr/>
                  <div className="d-flex justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
                    </svg>
                  </div>

                </div>


              </div> {/* ends col-10 */}
            </div> {/* end of view row */}
          </div>      
      );
    }
    else { 
      <ErrorPage />
    }
  }
}

