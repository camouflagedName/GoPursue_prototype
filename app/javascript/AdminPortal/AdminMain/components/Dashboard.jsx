import React from 'react';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adminName: localStorage.getItem("admin")
    }
  }

  render() {
      return (
        <div className="text-center">
          <h2>Welcome {this.state.adminName}</h2>
          <hr />
          <div className="d-flex justify-content-around">
            <div className="col-3">
              <div className="card">
                <h5 className="card-header">Users</h5>
                <div className="card-body">
                  <p className="card-text">Total:</p>
                  <p className="card-text">New:</p>
                  <p className="card-text">Inactive:</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <h5 className="card-header">Professionals</h5>
                <div className="card-body">
                  <p className="card-text">Total:</p>
                  <p className="card-text">New:</p>
                  <p className="card-text">?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

