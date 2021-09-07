import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { API_ROOT } from '../../packs/apiRoot';
import Footer from '../Footer';

export default class careerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isToggleOff: true,
            careers: { 
                title: 'Lab Technician',
                education: 'Bachelors Degree',
                pay: '61K - 90K',
                environment: 'lab/office',
                description: 'I work with a few close teammates everyday',
                image: 'labTech.jpg'
            } 
        };

        this.changeIcon = this.changeIcon.bind(this);
        this.changeCareer = this.changeCareer.bind(this);
    }

    changeIcon() {
        let iconChange = this.state.isToggleOff ? false : true;
        this.setState( { isToggleOff: iconChange });
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
                isToggleOff: true,
                careers: {
                    title: response.title,
                    education: response.education,
                    pay: response.pay,
                    environment: response.environment,
                    description: response.description,
                    image: response.image
                }   
            })
        });
    }

    render() {
        let iconName = this.state.isToggleOff ? "bi-bookmark" : "bi-bookmark-heart-fill";
        let toolTip = this.state.isToggleOff ? "Bookmark removed!" : "Bookmark added!";
        let careerData = this.state.careers;

        return (
            <>
                <div className="row vh-100">
                    <div className="card border-0">
                    <div className="mt-auto">
                        <img className="card-img-top" id='careerCardImg' src={require(`../../../assets/images/${careerData.image}`)} alt="labTech"/>
                    </div>
                    <div className="card-header border-0 bg-transparent">
                        <h5 className="card-title">{this.state.careers.title}</h5>
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
                        <p className="mt-0">{this.state.careers.education}</p>
                        <p className="fw-bold mb-0">Average Pay:</p>
                        <p>{this.state.careers.pay}</p>
                        <p className="fw-bold mb-0">Work environment:</p>
                        <p>{this.state.careers.environment}</p>
                        <p className="fw-bold mb-0">Quick Fact:</p>
                        <p>{this.state.careers.description}</p>
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

