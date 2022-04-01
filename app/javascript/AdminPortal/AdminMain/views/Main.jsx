import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { NavBar } from '../components/NavBar';
import { Dashboard } from '../components/Dashboard';
import { Users } from '../components/Users';
import { ShowAllProf } from '../components/ShowAllProf';
import { AddProfessional } from '../components/AddProfessional';
import { ErrorPage } from './ErrorPage';
import LogoutTimer from '../utils/LogoutTimer';

//turn this imports section into a router and then import the router?


export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adminName: localStorage.getItem("admin"), //don't use localStorage!!
      page: "Home"
    }
    this.changePage = this.changePage.bind(this)
    this.updatePageState = this.updatePageState.bind(this)
  }

  updatePageState(pageName) {
    this.setState({ page: pageName })
  }

  changePage() {
    switch (this.state.page) {
      case 'Home':
        return <Dashboard />
      case 'Users':
        return <Users />
      case 'Show All':
        return <ShowAllProf />
      case 'Add New':
        return <AddProfessional />
      case 'TBD':
        return <Dashboard />
    }
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
              {this.changePage()}
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

