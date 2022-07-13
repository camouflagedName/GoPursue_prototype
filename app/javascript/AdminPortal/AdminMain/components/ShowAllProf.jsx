import React from 'react';
import { API_ROOT } from '../../../packs/apiRoot';
import { CareersTable } from './CareersTable';
import { AddProfessional } from './AddProfessional';
import Handsontable from 'handsontable'
import { HotColumn, HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry'
import "handsontable/dist/handsontable.min.css"

registerAllModules()

export class ShowAllProf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      professionals: [],
      id: '',
      editable: false,
      addProfessional: false,
      spreadsheetView: false
    }

    this.makeEditable = this.makeEditable.bind(this);
    this.defaultState = this.defaultState.bind(this);
    this.getAllData = this.getAllData.bind(this);
    this.displayChange = this.displayChange.bind(this);
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

  displayChange() {
    this.setState({ spreadsheetView: !this.state.spreadsheetView })
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
        <div className="row d-flex justify-content-start mb-1 ms-1">
          <button className="btn col-1" onClick={this.displayChange} ><i className="bi bi-table"></i>Spreadsheet</button>
        </div>
        {this.state.spreadsheetView === false ?
          <OrigView professionals={this.state.professionals} event={this.makeEditable} match={this.state.id} default={this.defaultState} click={this.updateTable} />
          : <SpreadsheetView professionals={this.state.professionals} />}
      </>
    )
  }
}

const OrigView = (props) => {
  return (
    <>
      {props.addProfessional ? <AddProfessional /> : <></>}

      <table className="table table-striped table-hover table-bordered">
        <tbody>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Skills</th>
            <th scope="col">Advice</th>
            <th scope="col">Education</th>
            <th scope="col">Pay</th>
            <th scope="col">Environment</th>
            <th scope="col">Hashtags</th>
          </tr>
          <CareersTable data={props.professionals} event={props.event} match={props.match} default={props.default} onClick={props.click} />
        </tbody>
      </table>
    </>
  )
}

const SpreadsheetView = (props) => {
  console.log(props.professionals)
  const profData = {
    data: props.professionals
  }
  return (
    <div>
      <HotTable data={props.professionals} height='auto' width='auto' licenseKey='non-commercial-and-evaluation'>
        <HotColumn title="ID" data="id" />
        <HotColumn title="Image" data="image" />
        <HotColumn title="Name" data="name" />
        <HotColumn title="Title" data="title" />
        <HotColumn title="Description" data="description" />
        <HotColumn title="Skills" data="skills" />
        <HotColumn title="Advice" data="advice" />
        <HotColumn title="Education" data="education" />
        <HotColumn title="Pay" data="pay" />
        <HotColumn title="Environment" data="environment" />
        <HotColumn title="Hashtags" data="hashtag" />
      </HotTable>
    </div>
  )
}
