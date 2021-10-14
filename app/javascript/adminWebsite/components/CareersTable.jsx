import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { NavBar } from './NavBar';
import { API_ROOT } from '../../packs/apiRoot';


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
      hashtags: this.props.data.hashtags
    }

    this.check = this.check.bind(this);
    this.edit = this.edit.bind(this);
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

  check(event) {
    let url = `${API_ROOT}/api/v1/careers/admin/update/${event.currentTarget.value}`

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

  render() {
    return(
      this.props.data.map((professional, index) => {
        if(this.props.match === index.toString()){
          return (
            <tr id={index} key={index}>
              <td>
                <div className="row">
                  {professional.id}
                </div>
                <div className="row d-flex justify-content-evenly">
                  <button className="btn btn-danger btn-sm col-5" onClick={this.props.default}><i className="bi bi-x"></i></button>
                  <button className="btn btn-primary btn-sm col-5" onClick={this.check} value={professional.id}><i className="bi bi-check"></i></button>
                </div>
              </td>
              <td><img className="img-thumbnail" src={require(`../../../assets/images/professionals/${professional.image}`)}/></td>
              <td><input data-id="3" onChange={this.edit} type="text" placeholder={professional.name}/>{professional.name}</td>
              <td><input data-id="4" onChange={this.edit} type="text" placeholder={professional.title}/>{professional.title}</td>
              <td><input data-id="5" onChange={this.edit} type="text" placeholder={professional.skills}/>{professional.skills}</td>
              <td><input data-id="6" onChange={this.edit} type="text" placeholder={professional.advice}/>{professional.advice}</td>
              <td><input data-id="7" onChange={this.edit} type="text" placeholder={professional.education}/>{professional.education}</td>
              <td><input data-id="8" onChange={this.edit} type="text" placeholder={professional.pay}/>{professional.pay}</td>
              <td><input data-id="9" onChange={this.edit} type="text" placeholder={professional.environment}/>{professional.environment}</td>
              <td><input data-id="10" onChange={this.edit} type="text" placeholder={professional.hashtag.join(", ")}/>{professional.hashtag.join(", ")}</td>
            </tr>
          );
        }
        return (
          <tr id={index} key={index}>
            <td>
              {professional.id}
              <button value={index} className="btn btn-primary btn-sm" onClick={this.props.event}>Edit</button>
              </td>
            <td data-id={`${index}.2`}><img className="img-thumbnail" src={require(`../../../assets/images/professionals/${professional.image}`)}/></td>
            <td data-id={`${index}.3`}>{professional.name}</td>
            <td data-id={`${index}.4`}>{professional.title}</td>
            <td data-id={`${index}.5`}>{professional.skills}</td>
            <td data-id={`${index}.6`}>{professional.advice}</td>
            <td data-id={`${index}.7`}>{professional.education}</td>
            <td data-id={`${index}.8`}>{professional.pay}</td>
            <td data-id={`${index}.9`}>{professional.environment}</td>
            <td data-id={`${index}.10`}>{professional.hashtag.join(", ")}</td>
          </tr>
        );
      })
    )

  }
}
