import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { API_ROOT } from '../../packs/apiRoot';
import Footer from '../Footer';
import { Hashtags } from './Hashtag';
import { Link } from 'react-router-dom';
import { ShuffleButton } from './Shuffle';

export default class CareerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userID: localStorage.getItem('userID'),
            id: props.location.state ? props.location.state.id : '',
            title: props.location.state ? props.location.state.title : '',
            name: props.location.state ? props.location.state.name : '',
            favorite: props.location.state ? props.location.state.favorite : '',
            skills: props.location.state ? props.location.state.skills : '',
            advice: props.location.state ? props.location.state.advice : '',
            education: props.location.state ? props.location.state.education : '',
            pay: props.location.state ? props.location.state.pay : '',
            environment: props.location.state ? props.location.state.environment : '',
            image: props.location.state? props.location.state.image : '',
            bookmark: props.location.state? props.location.state.bookmark : false,
            bookmarkArray: props.location.state ? props.location.state.bookmarkArray : [],
            hashtags: props.location.state ? props.location.state.hashtags : [],
            previous: ''
        };

        this.changeIcon = this.changeIcon.bind(this);
        this.changeCareer = this.changeCareer.bind(this);
        this.addBookmark = this.addBookmark.bind(this);
        this.removeBookmark = this.removeBookmark.bind(this);
        this.previousCareer = this.previousCareer.bind(this);
    }

    changeIcon() {
        const url = `${API_ROOT}/api/v1/users/update/${this.state.userID}`;
        let careerIdString = this.state.id.toString();
        let iconChange = this.state.bookmarkArray.includes(careerIdString) ? false : true;
 
        this.setState({ bookmark: iconChange });
        if(iconChange === true) {
            this.addBookmark();
        }
        if(iconChange === false) {
            this.removeBookmark();
        }

        fetch(url, {
            method: 'PUT',
            headers: {
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ user: { bookmarks: this.state.bookmarkArray } })
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error("Bad network response.");
        })
        .catch(error => console.log(error.message));
    }

    addBookmark() {
        let currentBookmarks = this.state.bookmarkArray;
        let currentCareer = this.state.id.toString();

        currentBookmarks.push(currentCareer);
        this.setState({ bookmarkArray: currentBookmarks });
    }

    removeBookmark() {
        let currentCareer = this.state.id.toString();

        for (let i = 0; i < this.state.bookmarkArray.length; i++) {
            if(this.state.bookmarkArray[i] === this.state.id.toString()){
                this.state.bookmarkArray.splice(i, 1)
            }
        }

        let updatedArray = this.state.bookmarkArray.filter(careers => careers !== currentCareer);
        this.setState({ bookmarkArray: updatedArray });
    }

    changeCareer() {
        let id = Math.floor((Math.random() * 22) + 1);

        const url = `${API_ROOT}/api/v1/careers/show/${id}`;
        const userURL = `${API_ROOT}/api/v1/users/show/${this.state.userID}`;

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
                name: response.name,
                favorite: response.favorite,
                skills: response.skills,
                advice: response.advice,
                education: response.education,
                pay: response.pay,
                environment: response.environment,
                image: response.image,
                hashtags: response.hashtag,
                previous: this.state
            })
        });

        fetch(userURL)
        .then(response => {
            if (response.ok) {       
                return response.json();
            }
            throw new Error("Bad network response.");
        })
        .then(response => {
            this.setState({ bookmarkArray: response.bookmarks });
            this.setState( { bookmark: this.state.bookmarkArray.find(index => index == this.state.id) === undefined ? false : true });
        });
    }

    previousCareer() {   
        this.setState(
            {
                id: this.state.previous.id,
                title: this.state.previous.title,
                name: this.state.previous.name,
                favorite: this.state.previous.favorite,
                skills: this.state.previous.skills,
                advice: this.state.previous.advice,
                education: this.state.previous.education,
                pay: this.state.previous.pay,
                environment: this.state.previous.environment,
                image: this.state.previous.image,
                hashtags: this.state.previous.hashtags,
                previous: this.state.previous.previous
            }
        );
    }

    updateState(state){
        this.setState({ state : state

        });
    }

    render() {
        if (!this.state.userID) {
            window.location.replace("/");
            return <></>
        }
        if(this.state.id) {
            let iconName = this.state.bookmark === false ? "bi-bookmark" : "bi-bookmark-heart-fill";
            let toolTip = this.state.bookmark === false ? "Bookmark removed!" : "Bookmark added!";
            let careerData = this.state;
            const skillsNeeded = this.state.skills.split(",");
            const skillList = skillsNeeded.map((skill) => (
                <li>{skill}</li>
            ));
    
            return (
                <>
                    <div className="row vh-100">
                        <div className="card border-0">
                        <div className="mt-auto text-container">
                            <img className="card-img-top" id='careerCardImg' src={require(`../../../assets/images/${careerData.image}`)} alt="labTech"/>
                            <div className='bottom-left'>
                                <h1 className='bg-primary bg-gradient bg-opacity-75'>{this.state.title}</h1>    
                            </div>
                        </div>
                        <div className="card-header border-0 bg-transparent">
                            <p className="card-text">
                                <Hashtags search={this.state.hashtags} route={this.props.history}/>
                                <OverlayTrigger placement="left" delay={{ hide: 400 }} overlay={ <Tooltip>{toolTip}</Tooltip> }>
                                    <button onClick={this.changeIcon} type="button" className="bg-transparent border-0 float-end bookmarkIcon" data-bs-container="body" data-bs-toggle="popover" data-bs-content="Bookmark added!">
                                        <i className={`bi ${iconName}`}></i>
                                    </button>
                                </OverlayTrigger>
                            </p>
                        </div>
                        <div className="card-body">
                            <p className="fw-bold mb-0">Favorite part of my job:</p>
                            <p className="mt-0">{this.state.favorite}</p>
                            <p className="fw-bold mb-0">Skills Needed:</p>
                            <ul>
                                {skillList}
                            </ul>
                            <p className="fw-bold mb-0">My Advice:</p>
                            <p className="mt-0">{this.state.advice}</p>
                            <p className="fw-bold mb-0">My Education:</p>
                            <p className="mt-0">{this.state.education}</p>
                            <p className="fw-bold mb-0">Average Pay:</p>
                            <p>{this.state.pay}</p>
                            <p className="fw-bold mb-0">Work environment:</p>
                            <p>{this.state.environment}</p>
                            
                            <div className="d-flex col-10 mx-auto justify-content-center">
                            <ShuffleButton current={this.state} setState={this.updateState} change={this.changeCareer}/>
                                {/* <button onClick={this.previousCareer} className="btn btn-primary btn-lg me-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                    </svg>Previous</button>
                                <button onClick={this.changeCareer} className="btn btn-success btn-lg me-4">Shuffle
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </button> */}
                            </div>
                        </div>
                            <Footer />
                        </div>
                    </div>
                </>    
            );
        }
            this.changeCareer();

            return (

                <>
                </>
            )


    }
}

            {/*return (
                <>
                    <h2>Please log in before proceeding.</h2>
                    <Link to='/'>
                        <button type='button' className='btn btn-lg btn-warning'>Log in page</button>
                    </Link>
                </>
            )*/}