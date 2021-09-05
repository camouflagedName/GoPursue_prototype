import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { API_ROOT } from '../packs/apiRoot';

export default class careerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isToggleOff: true,
            careers: { 
                title: 'Lab Technician',
                education: 'Bachelors Degree',
                pay: '61K - 90K',
                environment: '',
                description: '',
                image: 'labTech.jpg'
            } 
        };

        this.changeIcon = this.changeIcon.bind(this);
        this.changeCareer = this.changeCareer.bind(this);
    }

    changeIcon() {
        let iconChange = this.state.isToggleOff ? false : true;
        this.setState( { isToggleOff: iconChange});
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
                        <img className="card-img-top" src={require(`../../assets/images/${careerData.image}`)} alt="labTech"/>
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
                        <p className="fw-bold">Education:</p><p> {this.state.careers.education}</p>
                        <p className="fw-bold">Average Pay:</p><p> {this.state.careers.pay}</p>
                        <p className="fw-bold">Work environment:</p><p> {this.state.careers.environment}</p>
                        <p className="fw-bold">Quick Fact:</p><p> {this.state.careers.description}</p>
                        <div className="col-6 mx-auto">
                            <button onClick={this.changeCareer} className="btn btn-primary btn-lg">Surprise Me!</button>
                        </div>
                    </div>
                        <div className="card-footer bg-transparent">
                            <ul className="nav nav-pills">
                                <div className="col-3">
                                    <li className="nav-item col-8 mx-auto">
                                    <a href="#" className="nav-link  py-3"  title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                        </svg>
                                    </a>
                                    </li>
                                </div>
                                <div className="col-3">
                                    <li className="nav-item col-8 mx-auto">
                                        <a href="#" className="nav-link active link-dark py-3" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-compass" viewBox="0 0 16 16">
                                                <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                                <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </div>
                                <div className="col-3">
                                    <li className="nav-item col-8 mx-auto">
                                        <a href="#" className="nav-link link-dark py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chat-text" viewBox="0 0 16 16">
                                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                                <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </div>
                                <div className="col-3">
                                    <li className="nav-item col-8 mx-auto">
                                        <a href="#" className="nav-link link-dark py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </>    
        );
    }
}

