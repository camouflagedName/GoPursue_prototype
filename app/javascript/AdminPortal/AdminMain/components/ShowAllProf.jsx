import React from 'react';
import { API_ROOT } from '../../../packs/apiRoot';
import { CareersTable } from './CareersTable';
import { AddProfessional } from './AddProfessional';

export class ShowAllProf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      professionals: [],
      id: '',
      editable: false,
      addProfessional: false
    }

    this.makeEditable = this.makeEditable.bind(this);
    this.defaultState = this.defaultState.bind(this);
    this.getAllData = this.getAllData.bind(this);
    this.addProfessional = this.addProfessional.bind(this);
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData() {
    const url = `${API_ROOT}/api/v1/careers/index`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad network response.");
      })
      .then(json => { this.setState({ professionals: json }) })
      .catch(error => console.log(error.message));
  }

  makeEditable(event) {
    this.setState({ id: event.currentTarget.value, editable: true });
  }

  defaultState() {
    this.setState({ id: '', editable: false, });
  }

  updateTable = () => {
    this.getAllData();
    this.defaultState();
  }

  addProfessional() {
    this.setState({ addProfessional: true })
  }

  removeProfessional() {
    const url = `${API_ROOT}/api/v1/careers/destroy/${this.state.professionals.id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad network response.");
      })
      .then(json => { this.setState({ professionals: json }) })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <>
        {/*<div className="row d-flex justify-content-start mb-1 ms-1">
            <button className="btn btn-link col-1 me-1"><i className="bi bi-person-x"></i>Remove</button>
            <button className="btn btn-link col-1" onClick={this.addProfessional} ><i className="bi bi-person-plus-fill"></i>Add</button>
    </div>*/}
        {this.state.addProfessional ? <AddProfessional /> : <></>}

        <table className="table table-striped table-hover table-bordered">
          <tbody>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Skills</th>
              <th scope="col">Advice</th>
              <th scope="col">Education</th>
              <th scope="col">Pay</th>
              <th scope="col">Environment</th>
              <th scope="col">Hashtags</th>
            </tr>
            <CareersTable data={this.state.professionals} event={this.makeEditable} match={this.state.id} default={this.defaultState} onClick={this.updateTable} />
          </tbody>
        </table>
      </>
    )
  }
}
