import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { NavBar } from './NavBar';


export class Main extends React.Component {

  render() {
    return (
      <div className="container-fluid vh-100">
        <div className="row vh-100">
          <Sidebar />

          <div className="container d-flex col-10 g-1 flex-column">
            <NavBar text="users and careers"/>

            <br/>

          </div> {/* ends col-10 */}
        </div> {/* end of view row */}
      </div>
    );
  }
}

