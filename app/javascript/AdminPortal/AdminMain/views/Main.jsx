import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { NavBar } from '../components/NavBar';
import { Dashboard } from '../components/Dashboard';
import Users from '../components/Users';
import { ShowAllProf } from '../components/ShowAllProf';
import { AddProfessional } from '../components/AddProfessional';
import { ErrorPage } from './ErrorPage';
import LogoutTimer from '../utils/LogoutTimer';
import { API_ROOT } from '../../../packs/apiRoot';

//turn this imports section into a router and then import the router?


export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adminName: localStorage.getItem("admin"), //don't use localStorage!!
      page: "Home",
      users: []
    }
    this.updatePageState = this.updatePageState.bind(this)
  }

  updatePageState(pageName) {
    this.setState({ page: pageName })
  }

  componentDidMount() {
    const url = `${API_ROOT}/api/v1/users/index`

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
    if (this.state.adminName) {
      return (
        <div className="container-fluid vh-100">
          <LogoutTimer location={"/admin"} />
          <div className="row vh-100">
            <Sidebar changePage={this.updatePageState} />
            <div className="container d-flex col-10 g-1 flex-column">
              <NavBar text="users and careers" />
              <br />
              {
                this.state.page === 'Home' ? <Dashboard users={this.state.users} />
                  : this.state.page === "Users" ? <Users users={this.state.users} />
                    : this.state.page === "ShowAll" ? <ShowAllProf />
                      : this.state.page === "AddNew" ? <AddProfessional />
                        : <div>This page is not quite ready...</div>
              }
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<ErrorPage />);
    }
  }
}

