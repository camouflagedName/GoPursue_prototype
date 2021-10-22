import React from 'react';
import { API_ROOT } from '../../packs/apiRoot';
import { DirectUpload } from '@rails/activestorage';
import { Image } from './Image';


export class CareersTable extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      name: this.props.data.name,
      title: this.props.data.title, 
      skills: this.props.data.skills,
      advice: this.props.data.advice,
      education: this.props.data.education,
      pay: this.props.data.pay,
      environment: this.props.data.environment,
      hashtags: this.props.data.hashtags,
      imgURL: null
    }

    this.check = this.check.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
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
        break;
    }
  }

  check(event) {
    let url = `${API_ROOT}/api/v1/careers/update/${event.currentTarget.value}`

    fetch(url, {
      method: 'PUT',
      headers: {
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
        "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      career:{        
        id: event.target.value,
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

  delete(event) {
    let url = `${API_ROOT}/api/v1/careers/destroy/${event.currentTarget.value}`

    fetch(url, {
      method: 'DELETE',
      headers: {
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
        "Content-Type": 'application/json'
    }})
    .then( () => {this.props.onClick(); })
    .catch(error => console.log(error.message));
  }

  render() {
    return(
      this.props.data.map((professional, index) => {
        //need logic to determine if an image is in assets/images/professionals or not
        //this.setState({ imgURL: `../../../assets/images/professionals/${professional.image}` ? require(`../../../assets/images/professionals/${professional.image}`) : professional.image });
        if(this.props.match === index.toString()){
          return (
            <tr className="text-center" id={index} key={index}>
              <td className="text-start">
                <div className="row">
                  {professional.id}
                </div>
                <div className="d-flex justify-content-evenly">
                  <button className="btn btn-link" onClick={this.props.default}><i className="bi bi-x"></i></button>
                  <button className="btn btn-link" onClick={this.check} value={professional.id}><i className="bi bi-check"></i></button>
                </div>
              </td>
              <td className="align-middle"><Image image={professional.image} /></td>
              <td className="align-middle"><input data-id="3" onChange={this.edit} type="text" placeholder={professional.name}/>{professional.name}</td>
              <td className="align-middle"><input data-id="4" onChange={this.edit} type="text" placeholder={professional.title}/>{professional.title}</td>
              <td className="align-middle"><input data-id="5" onChange={this.edit} type="text" placeholder={professional.skills}/>{professional.skills}</td>
              <td className="align-middle"><input data-id="6" onChange={this.edit} type="text" placeholder={professional.advice}/>{professional.advice}</td>
              <td className="align-middle"><input data-id="7" onChange={this.edit} type="text" placeholder={professional.education}/>{professional.education}</td>
              <td className="align-middle"><input data-id="8" onChange={this.edit} type="text" placeholder={professional.pay}/>{professional.pay}</td>
              <td className="align-middle"><input data-id="9" onChange={this.edit} type="text" placeholder={professional.environment}/>{professional.environment}</td>
              <td className="align-middle"><input data-id="10" onChange={this.edit} type="text" placeholder={professional.hashtag.join(", ")}/>{professional.hashtag.join(", ")}</td>
            </tr>
          );
        }
        return (
          <tr className="text-center" id={index} key={index}>
            <td className="text-start">
              {professional.id}
              <div className="d-flex justify-content-evenly">
                <button value={index} className="btn btn-link" onClick={this.props.event}><i className="bi bi-pencil"></i></button>
                <button value={index} className="btn btn-link" onClick={this.delete} value={professional.id}><i className="bi bi-trash"></i></button>
              </div>
            </td>
            <td className="align-middle" data-id={`${index}.2`}><Image image={professional.image} /></td>
            <td className="align-middle" data-id={`${index}.3`}>{professional.name}</td>
            <td className="align-middle" data-id={`${index}.4`}>{professional.title}</td>
            <td className="align-middle" data-id={`${index}.5`}>{professional.skills}</td>
            <td className="align-middle" data-id={`${index}.6`}>{professional.advice}</td>
            <td className="align-middle" data-id={`${index}.7`}>{professional.education}</td>
            <td className="align-middle" data-id={`${index}.8`}>{professional.pay}</td>
            <td className="align-middle" data-id={`${index}.9`}>{professional.environment}</td>
            <td className="align-middle" data-id={`${index}.10`}>{professional.hashtag.join(", ")}</td>
          </tr>
        );
      })
    )

  }
}
