import React from 'react';

export class UsersMobile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users: [] }
  }

  users = this.props.users

  render() {
    let date = new Date();
    let users = this.users.map(user => (
      <table className="table table-striped table-hover table-bordered" key={user.id}>
        <tbody>
          <th>{user.id}</th>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Created</td>
            <td>{user.created_on ? user.created_on : ""}</td>
          </tr>
          <tr>
            <td>Cards Viewed</td>
            <td>{user.viewed_cards.join(", ")}</td>
          </tr>
          <tr>
            <td>Favorites</td>
            <td>{user.bookmarks.join(", ")}</td>
          </tr>
          <tr>
            <td>Logins</td>
            <td>{user.num_logins}</td>
          </tr>
          <tr>
            <td>Avg Time</td>
            <td>{Math.round(user.avg_time * 100) / 100} minutes</td>
          </tr>
          <tr>
            <td>Last Login</td>
            <td>{user.last_login ? user.last_login : user.created_on}</td>
          </tr>
        </tbody>
      </table>
    ))

    return (
      <div className="my-3 offset-2 col-8">
        {users}
      </div>
    );
  }
}

