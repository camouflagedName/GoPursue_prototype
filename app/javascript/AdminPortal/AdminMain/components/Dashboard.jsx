import React from 'react';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adminName: localStorage.getItem("admin")
    }
  }

  guestUsers = this.props.users.filter(user => user.email_confirm === false)
  registeredUsers = this.props.users.filter(user => user.email_confirm === true && user.id > 10)
  //newUsers = this.props.users.filter(user => user.)

  render() {
      return (
        <div>
          <h2 className="text-center">Welcome {this.state.adminName}</h2>
          <hr />
          <div className="d-flex justify-content-around row">
            <div className="col">
              <div className="card m-3">
                <h5 className="card-header text-center">Users</h5>
                <div className="card-body">
                  <p className="card-text d-flex justify-content-between"><b>Total: </b>{this.props.users.length - 10}</p>
                  <p className="card-text d-flex justify-content-between"><b>New: </b></p>
                  <p className="card-text d-flex justify-content-between"><b>Registered: </b>{this.registeredUsers.length}</p>
                  <p className="card-text d-flex justify-content-between"><b>Guest: </b>{this.guestUsers.length} </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card m-3">
                <h5 className="card-header text-center">Professionals</h5>
                <div className="card-body">
                  <p className="card-text">Total:</p>
                  <p className="card-text">New:</p>
                  <p className="card-text">Most Viewed</p>
                  <p className="card-text">Most Bookmarked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

