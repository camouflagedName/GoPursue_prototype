import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { NavBar } from './NavBar';
import { API_ROOT } from '../../packs/apiRoot';

export class Users extends React.Component {
  constructor(props){
    super(props);

    this.state = { users: [] }
  }

  componentDidMount() {
    const url = `${API_ROOT}/api/v1/users/index`;

    fetch(url)
    .then(response => {
      if(response.ok) { return response.json();
      }
      throw new Error("Bad network response.");
    })
    .then(json => { this.setState({ users: json }) })
    .catch(error => console.log(error.message));
  }

 
  render() {
    let date = new Date();

    let users = this.state.users.map(user => (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{Math.floor(user.age)}</td>
        <td>{user.created_on ? user.created_on : ""}</td>
        <td>{user.viewed_cards.join(", ")}</td>
        <td>{user.bookmarks.join(", ")}</td>
        <td>{user.num_logins}</td>
        <td>{Math.round(user.avg_time*100)/100} minutes</td>
        <td>{user.last_login ? user.last_login : user.created_on}</td>
      </tr>
    ))
    return (
      <div className="container-fluid vh-100">
        <div className="row vh-100">
          <Sidebar />

          <div className="container d-flex col-10 g-1 flex-column">
          <NavBar text="users" />
          
          <table className="table table-striped table-hover table-bordered">
            <tbody>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Created On</th>
                <th>Viewed</th>
                <th>Favorites</th>
                <th>No. of Logins</th>
                <th>Avg Time</th>
                <th>Last Login</th>
              </tr>
              {users}
            </tbody>
          </table>

            <br/>



          </div> {/* ends col-10 */}
        </div> {/* end of view row */}
      </div>
    );
  }
}

