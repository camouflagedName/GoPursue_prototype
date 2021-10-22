import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { NavBar } from './NavBar';
import { API_ROOT } from '../../packs/apiRoot';
import { checkPropTypes } from 'prop-types';
import { CareersTable } from './CareersTable';
import { DirectUpload } from '@rails/activestorage';

export class AddProfessional extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedPictures: null,
      professionals: [],
      id: '',
      name: '',
      title: '', 
      skills: '',
      advice: '',
      education: '',
      pay: '',
      environment: '',
      hashtag: '',
      currentPic: null
     }
     this.addNew = this.addNew.bind(this);
     this.edit = this.edit.bind(this);
  }


  addNew(event) {
    event.preventDefault();
    let url = `${API_ROOT}/api/v1/careers/create`;

    fetch(url, {
        method: 'POST',
        headers: {
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
          "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        career:{        
          name: this.state.name,
          title: this.state.title, 
          favorite: "cheese",
          skills: this.state.skills,
          advice: this.state.advice,
          education: this.state.education,
          pay: this.state.pay,
          environment: this.state.environment,
          hashtag: this.state.hashtag.split(", "),
          image: this.state.currentPic
        }
      })})
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
        this.setState({ hashtag: event.target.value });
        break;
    }
  }

  pictureUpload = event => {
    this.setState({ selectedPictures: event.target.files[0] });
    event.preventDefault();
    const pictureData = new FormData();
    pictureData.append("name", this.state.name);
    pictureData.append("title", this.state.title);
    pictureData.append("featured_image", this.state.selectedPictures);
    let createImage = `${API_ROOT}/api/v1/careers/createImage`;


    fetch(createImage, {
      method: 'POST',
      headers: {
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
      },
      body: pictureData
    })
    .then((response) => {
      if (response.ok) {       
          return response.json();
      }
      throw new Error("Bad network response.");
    })
    .then(data => this.setState({ currentPic: data.url }))
    .catch(error => console.log(error.message));
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row mb-3">
          <h2>Add New Career Card</h2>
        </div>
        <hr/>
        <div className="row g-3">
          <div className="col-3">
            <div className="d-flex justify-content-center">
              { this.state.currentPic == null ?
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg> : <img className="img-thumbnail" src={this.state.currentPic} /> }
            </div>
            <div className="d-flex justify-content-center">
              <label className="btn btn-primary" type="file">Add Picture<input type="file" hidden onChange={this.pictureUpload}></input></label>
            </div>
          </div>
          <div className="col-9">
            <form className="row" onSubmit={this.addNew}>
              <div className="col-8 mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input className="form-control" id="name" data-id="3" onChange={this.edit} type="text"/>
              </div>
              <div className="col-8 mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input className="form-control" id="title" data-id="4" onChange={this.edit} type="text"/>
              </div>
              <div className="col-8 mb-3">
                <label htmlFor="skills" className="form-label">Skills</label>
                <input className="form-control" id="skills" data-id="5" onChange={this.edit} type="text"/>
              </div>
              <div className="col-8 mb-3">
                <label htmlFor="advice" className="form-label">Advice</label>
                <input className="form-control" id="advice" data-id="6" onChange={this.edit} type="text"/>
              </div>
              <div className="col-8 mb-3">
                <label htmlFor="education" className="form-label">Education</label>
                <input className="form-control" id="education" data-id="7" onChange={this.edit} type="text"/>
              </div>
              <div className="col-8 mb-3">
                <label htmlFor="pay" className="form-label">Pay</label>
                <select className="form-select" id="education" data-id="8" onChange={this.edit} aria-label="education">
                  <option value=''>--Choose annual pay--</option>
                  <option value='$1k-30k'>$1k-30k</option>
                  <option value='$31k-60k'>$31k-60k</option>
                  <option value='$61k-90k'>$61k-90k</option>
                  <option value='$91k-120k'>$91k-120k</option>
                  <option value='$121k-200k'>$121k-200k</option>
                  <option value='$200k+'>$200k+</option>
                </select>
              </div>
              <div className="col-8 mb-3">
                <label htmlFor="environment" className="form-label">Environment</label>
                <input className="form-control" id="environment" data-id="9" onChange={this.edit} type="text"/>
              </div>
              <div className="col-8 mb-3">
                <label htmlFor="hashtags" className="form-label">Hashtags</label>
                <input className="form-control" id="hashtags" data-id="10" onChange={this.edit} type="text"/>
              </div>
              
              <div className="d-flex col-8 justify-content-evenly mb-1">
                <Link to="/admin/professionals">
                  <button className="btn btn-danger me-3"><i className="bi bi-x"></i>Cancel</button>
                </Link> 
                <button className="btn btn-primary" type="submit"><i className="bi bi-check"></i>Submit</button>
              </div> 
            </form>          
          </div>
        </div>
      </div>         



    )
  }
}
