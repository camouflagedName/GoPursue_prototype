import React, { createRef, useEffect, useState } from 'react';
import { API_ROOT } from '../../../packs/apiRoot';
import { CareersTable } from './CareersTable';
import { AddProfessional } from './AddProfessional';
import ShowAllProfMobile from './ShowAllProfMobile';
import Handsontable from 'handsontable'
import { HotColumn, HotTable, BaseEditorComponent } from '@handsontable/react';
import { ColumnSorting } from 'handsontable/plugins';
import { registerAllModules, registerAllPlugins } from 'handsontable/registry'
import "handsontable/dist/handsontable.min.css"

registerAllModules()
registerAllPlugins()

export class ShowAllProf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      professionals: [],
      id: '',
      editable: false,
      addProfessional: false,
      spreadsheetView: false,
      view: "table"
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

  //remove
  displayChange(view) {
    this.setState({ view: view })
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
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className="btn" onClick={() => this.setState({ view: "table" })}><i className="bi bi-card-text me-2"></i>Table</button>
            </li>
            <li className="nav-item">
              <button className="btn" onClick={() => this.setState({ view: "spreadsheet" })}><i className="bi bi-table me-2"></i>Spreadsheet</button>
            </li>
            <li className="nav-item">
              <button className="btn" onClick={() => this.setState({ view: "stack" })}><i className="bi bi-view-stacked me-2"></i>Stack</button>
            </li>
          </ul>
        </div>
        {
          this.state.view === "table" ?
            <OrigView professionals={this.state.professionals} event={this.makeEditable} match={this.state.id} default={this.defaultState} click={this.updateTable} />
            : this.state.view === "spreadsheet" ?
              <SpreadsheetView professionals={this.state.professionals} />
              : <ShowAllProfMobile data={this.state.professionals} />
        }
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

const SpreadsheetView = props => {

  let updatedProfMap = props.professionals.map((entry) => {
    return [{ tableData: entry.id }, { tableData: entry.title }, { tableData: entry.name }, { tableData: entry.description }, { tableData: entry.favorite }, { tableData: entry.skills }, { tableData: entry.advice }, { tableData: entry.education }, { tableData: entry.pay }, { tableData: entry.environment }, { tableData: entry.hashtag }, { tableData: entry.image }]
  })

  let spreadsheet = updatedProfMap.map((data, index) => {

    return (
      <div key={index} className='my-3 offset-1'>
        <HotTable
          data={data}
          bindRowsWithHeaders={true}
          colHeaders={[`#${data[0].tableData}_${data[2].tableData}`]}
          rowHeaders={['ID', 'Title', 'Name', 'Description', 'Favorite', 'Skills', 'Advice', 'Education', 'Pay', 'Environment', 'Hashtag', 'Image URL']}
          licenseKey='non-commercial-and-evaluation'
          afterChange={(updates, source) => {
            if (source !== "load") {
              console.log(source)
            }
          }}>

        </HotTable>
      </div>
    )
  })

  return (
    <>
      {spreadsheet}
    </>
  )

}
/*
const SpreadsheetView = (props) => {

  const [changedRow, setChangedRow] = useState([])

  //put the updates in a state array --> update with afterChange
  //on save, foreach through the array
  //add each cell from row number from array to body of api call

  const profData = {
    data: props.professionals
  }

  const settings = {
    autoRowSize: true,
    autoColumnSize: true
  }

  return (
    <div>
      <HotTable
        data={props.professionals}
        settings={settings}
        licenseKey='non-commercial-and-evaluation'
        afterChange={(updates, source) => {
          if (source !== "load") {
            console.log(updates)
          }
        }}>

        <HotColumn
          title="ID"
          data="id"
        />
        <HotColumn title="Image" data="image">

        </HotColumn>
        <HotColumn title="Name" data="name">

        </HotColumn>
        <HotColumn title="Title" data="title">

        </HotColumn>
        <HotColumn title="Description" data="description">

        </HotColumn>
        <HotColumn title="Skills" data="skills">

        </HotColumn>
        <HotColumn title="Advice" data="advice">

        </HotColumn>
        <HotColumn title="Education" data="education">

        </HotColumn>
        <HotColumn title="Pay" data="pay">

        </HotColumn>
        <HotColumn title="Environment" data="environment">

        </HotColumn>
        <HotColumn title="Hashtags" data="hashtag">

        </HotColumn>
      </HotTable>
    </div>
  )
}

const SendData = (props) => {

  const handleClick = () => {

    console.log("Row: ", props.row)
    console.log("Col: ", props.col)
    console.log("Value: ", props.value)
    console.log("col name: ", props.prop)
    console.log("properties: ", props.cellProperties)
  }
  
    return (
      <button className="btn" onClick={handleClick}>{props.value}</button>
    
    )
  }
*/


const Test = (props) => {

  const handleClick = () => {

    console.log(props.test)
  }

  return (
    <button className="btn" onClick={handleClick}>Test</button>
  )

}
