import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { TURBOLINKS_PERMANENT_ATTR } from 'react_ujs';
import { API_ROOT } from '../../packs/apiRoot';
import Footer from '../Footer';

export default class careerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: props.location.state ? props.location.state.id : '',
            title: props.location.state ? props.location.state.title : 'Lab Technician',
            education: props.location.state ? props.location.state.education : 'Bachelors Degree',
            pay: props.location.state ? props.location.state.pay : '61K - 90K',
            environment: props.location.state ? props.location.state.environment : 'lab/office',
            description: props.location.state ? props.location.state.description : 'I work with a few close teammates everyday',
            image: props.location.state? props.location.state.image : 'labTech.jpg',
            bookmark: props.location.state ? props.location.state.bookmark : 'false'   //false means the bookmark icon has not been selected
        };

        this.changeIcon = this.changeIcon.bind(this);
        this.changeCareer = this.changeCareer.bind(this);
    }

    changeIcon() {
        const url = `${API_ROOT}/api/v1/careers/update/${this.state.id}`;
        let iconChange = this.state.bookmark === 'true' ? 'false' : 'true'; 
   
        const {_id, _title, _education, _pay, _environment, _description, _image, bookmark} = this.state;
        
        fetch(url, {
            method: 'PUT',
            headers: {
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({bookmark: iconChange})
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            }

            throw new Error("Bad network response.");
        })
        .then(json => {     
            this.setState( { bookmark: json.bookmark });
        })
        .catch(error => console.log(error.message));
    }

    changeCareer() {
        let id = Math.floor(Math.random() * 10 + 1);
        const url = `${API_ROOT}/api/v1/careers/show/${id}`;

        fetch(url)
        .then(response => {
            if (response.ok) {       
                return response.json();
            }
            throw new Error("Bad network response.");
        })
        .then(response => {
            this.setState({ 
                id: response.id,
                title: response.title,
                education: response.education,
                pay: response.pay,
                environment: response.environment,
                description: response.description,
                image: response.image,
                bookmark: response.bookmark
            })
        });
    }

    render() {
        let iconName = this.state.bookmark === "false" ? "bi-bookmark" : "bi-bookmark-heart-fill";
        let toolTip = this.state.bookmark === 'false' ? "Bookmark removed!" : "Bookmark added!";
        let careerData = this.state;

        return (
            <>
                <div className="row vh-100">
                    <div className="card border-0">
                    <div className="mt-auto text-container">
                        <img className="card-img-top" id='careerCardImg' src={require(`../../../assets/images/${careerData.image}`)} alt="labTech"/>
                        <div className='bottom-left'>
                            <h1>{this.state.title}</h1>    
                        </div>
                    </div>

                    <div className="card-header border-0 bg-transparent">
                        <p className="card-text">
                            <a className="text-decoration-none" href="#">#TBD </a>
                            <a className="text-decoration-none" href="#">#tbd </a>
                            <a className="text-decoration-none" href="#">#to_be_determined </a>
                            <OverlayTrigger placement="left" delay={{ hide: 400 }} overlay={ <Tooltip>{toolTip}</Tooltip> }>
                                <button onClick={this.changeIcon} type="button" className="bg-transparent border-0 float-end bookmarkIcon" data-bs-container="body" data-bs-toggle="popover" data-bs-content="Bookmark added!">
                                    <i className={`bi ${iconName}`}></i>
                                </button>
                            </OverlayTrigger>
                        </p>
                    </div>
                    <div className="card-body">
                        <p className="fw-bold mb-0">Education:</p>
                        <p className="mt-0">{this.state.education}</p>
                        <p className="fw-bold mb-0">Average Pay:</p>
                        <p>{this.state.pay}</p>
                        <p className="fw-bold mb-0">Work environment:</p>
                        <p>{this.state.environment}</p>
                        <p className="fw-bold mb-0">Quick Fact:</p>
                        <p>{this.state.description}</p>
                        <div className="d-flex col-6 mx-auto justify-content-center">
                            <button onClick={this.changeCareer} className="btn btn-primary btn-lg">Surprise Me!</button>
                        </div>
                    </div>
                        <Footer />
                    </div>
                </div>
            </>    
        );
    }
}

