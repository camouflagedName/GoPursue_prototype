import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { NavBar } from './NavBar';
import { API_ROOT } from '../../packs/apiRoot';
import { checkPropTypes } from 'prop-types';
import { CareersTable } from './CareersTable';

export class AddProfessional extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      professionals: [],
      id: '',
      editable: false,
      name: '',
      title: '', 
      skills: '',
      advice: '',
      education: '',
      pay: '',
      environment: '',
      hashtags: ''
     }

     this.addNew = this.addNew.bind(this);
     this.edit = this.edit.bind(this);
     this.updateTable = this.updateTable.bind(this);
  }


  addNew(event) {
    let url = `${API_ROOT}/api/v1/admin/careers/create`

    fetch(url, {
      method: 'PUT',
      headers: {
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
        "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      career:{        
        name: this.state.name,
        title: this.state.title, 
        skills: this.state.skills,
        advice: this.state.advice,
        education: this.state.education,
        pay: this.state.pay,
        environment: this.state.environment,
        hashtags: this.state.hashtags
      }
    })})
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error("Bad network response.");
    })
    .then( () => {this.props.onClick(); })
    .catch(error => console.log(error.message));
  }

  edit(event) {
    switch(event.currentTarget.dataset.id) {
      case '3':
        this.setState({ name: event.target.value });
        break;
      case '4':
        this.setState({ title: event.target.value });
        break;
      case '5':
        this.setState({ skills: event.target.value });
        break;
      case '6':
        this.setState({ advice: event.target.value });
        break;
      case '7':
        this.setState({ education: event.target.value });
        break;
      case '8':
        this.setState({ pay: event.target.value });
        break;
      case '9':
        this.setState({ environment: event.target.value });
        break;
      case '10':
        this.setState({ hashtags: event.target.value });
        console.log(this.state.hashtags);
        break;
    }
  }

  updateTable = () => {
    this.getAllData();
    this.defaultState();
  }

  render() {
    return (         
          <table className="table table-striped table-hover table-bordered">
            <tbody>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Title</th>
                <th scope="col">Skills</th>
                <th scope="col">Advice</th>
                <th scope="col">Education</th>
                <th scope="col">Pay</th>
                <th scope="col">Environment</th>
                <th scope="col">Hashtags</th>
                <th scope="col">Confirm</th>
              </tr>
              <tr>
                <td><input data-id="3" onChange={this.edit} type="text"/></td>
                <td><input data-id="4" onChange={this.edit} type="text"/></td>
                <td><input data-id="5" onChange={this.edit} type="text"/></td>
                <td><input data-id="6" onChange={this.edit} type="text"/></td>
                <td><input data-id="7" onChange={this.edit} type="text"/></td>
                <td><input data-id="8" onChange={this.edit} type="text"/></td>
                <td><input data-id="9" onChange={this.edit} type="text"/></td>
                <td><input data-id="10" onChange={this.edit} type="text"/></td>
                <td><input data-id="11" onChange={this.edit} type="text"/></td>
                <td>
                  <div className="row d-flex justify-content-evenly mb-1">
                    <button className="btn btn-danger btn-sm col-5" onClick><i className="bi bi-x"></i></button>
                    <button className="btn btn-primary btn-sm col-5" onClick><i className="bi bi-check"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>


    )
  }
}
