import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { NavBar } from './NavBar';
import { ErrorPage } from './ErrorPage';
import LogoutTimer from '../../components/LogoutTimer';


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
            <LogoutTimer props={this.props} location={"/admin"} user={null}/>
            <div className="row vh-100">
              <Sidebar />
              <div className="container d-flex col-10 g-1 flex-column">
                <NavBar text="users and careers"/>
                <br/>
                <div className="text-center">
                  <h2>Welcome {this.state.adminName}</h2>
                  <hr/>
                  <div className="d-flex justify-content-around">
                    <div className="col-3">
                      <div className="card">
                      <h5 className="card-header">Users</h5>
                        <div className="card-body">
                          <p class="card-text">Total:</p>
                          <p class="card-text">New:</p>
                          <p class="card-text">Inactive:</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="card">
                      <h5 className="card-header">Professionals</h5>
                        <div className="card-body">
                          <p class="card-text">Total:</p>
                          <p class="card-text">New:</p>
                          <p class="card-text">?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* ends col-10 */}
            </div> {/* end of view row */}
          </div>      
      );
    }
    else { 
      return (<ErrorPage/>);
      
    }
  }
}

