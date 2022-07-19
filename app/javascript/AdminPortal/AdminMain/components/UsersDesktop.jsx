import React from 'react';

export class UsersDesktop extends React.Component {
  constructor(props) {
    super(props);

    this.state =
    {
      users: [],
    }
  }

  users = this.props.users

  render() {
    let date = new Date();
    let users = this.users.map(user => (
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
      <div className='m-3 mt-2'>
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
      </div>
    );
  }
}

