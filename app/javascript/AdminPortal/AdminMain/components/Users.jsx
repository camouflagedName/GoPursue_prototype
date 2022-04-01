import React from 'react';
import { API_ROOT } from '../../../packs/apiRoot';


export class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users: [] }
  }

  componentDidMount() {
    const url = `${API_ROOT}/api/v1/users/index`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad network response.");
      })
      .then(json => { this.setState({ users: json }) })
      .catch(error => console.log(error.message));
  }

  render() {
    let date = new Date();
    let users = this.state.users.map(user => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.created_on ? user.created_on : ""}</td>
        <td>{user.viewed_cards.join(", ")}</td>
        <td>{user.bookmarks.join(", ")}</td>
        <td>{user.num_logins}</td>
        <td>{Math.round(user.avg_time * 100) / 100} minutes</td>
        <td>{user.last_login ? user.last_login : user.created_on}</td>
      </tr>
    ))
    return (
      <table className="table table-striped table-hover table-bordered">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
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
    );
  }
}

