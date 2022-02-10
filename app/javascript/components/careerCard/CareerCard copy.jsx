import React, { useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { API_ROOT } from '../../packs/apiRoot';
import Footer from '../Footer';
import { Hashtags } from './Hashtag';
import { ShuffleButton } from './Shuffle';
import { Pay } from './Pay';
import { PeopleNumber } from './NumPeople';
import { CareerCardImage } from './CareerCardImage';
import Header from '../Header';
import LogoutTimer from '../LogoutTimer';

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
            cardIdarray: [],
            hashtags: props.location.state ? props.location.state.hashtags : [],
            previous: '',
            timer: ''
        };

        this.changeIcon = this.changeIcon.bind(this);
        this.changeCareer = this.changeCareer.bind(this);
        this.addBookmark = this.addBookmark.bind(this);
        this.removeBookmark = this.removeBookmark.bind(this);
        this.previousCareer = this.previousCareer.bind(this);
        //this.logoutTimer = this.logoutTimer.bind(this);
        this.setState = this.setState.bind(this);
    }

    changeIcon(event) {
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
        /*let id = Math.floor((Math.random() * 22) + 1);
        if(id === this.state.id) {
            this.changeCareer();
        } */
        const url = `${API_ROOT}/api/v1/careers/random_career`;
        const userURL = `${API_ROOT}/api/v1/users/show/${this.state.userID}`;
        const userDataURL = `${API_ROOT}/api/v1/users/data/${this.state.userID}`;

        fetch(url)
        .then(response => {
            if (response.ok) {       
                return response.json();
            }
            throw new Error("Bad network response.");
        })
        .then(response => {
            if(this.state.id === response.id) {
                this.changeCareer();
                return;
            }
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
            });
        })
        .then(() => {
            fetch(userDataURL, {
                method: 'PUT',
                headers: {
                    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ viewed_cards: [this.state.id.toString()] })
            })
            .catch(error => console.log(error.message));
        })
        .catch(error => console.log(error.message));

        fetch(userURL)
        .then(response => {
            if(response.ok) {       
                return response.json();
            }
            throw new Error("Bad network response.");
        })
        .then(response => {
            this.setState({ bookmarkArray: response.bookmarks });
            this.setState({ bookmark: this.state.bookmarkArray.find(index => index == this.state.id) === undefined ? false : true });   
            this.setState({ cardIdarray: response.viewed_cards})
        })
        .catch(error => error.message);

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
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
        this.setState({ state : state });
    }

    /*logoutTimer(props, _setState) {
        console.log("trigger!")
        let time;
        clearTimeout(time);
        time = setTimeout(() => {logout(_setState)}, 5000);

        function logout(setState) {
            alert("You are now logged out.")
            //localStorage.clear();
            //setState({ userID: '' });
            props.history.push("/");
        }
    }

    componentDidMount(){
        window.addEventListener('load', this.logoutTimer(this.props, this.setState));
        document.addEventListener('mousemove', this.logoutTimer(this.props, this.setState));
    }

    componentDidUpdate(){
        window.addEventListener('load', this.logoutTimer(this.props, this.setState));
        document.addEventListener('mousemove', this.logoutTimer(this.props, this.setState));
    }

    componentWillUnmount(){
        window.removeEventListener('load', this.logoutTimer(this.props, this.setState));
        document.removeEventListener('mousemove', this.logoutTimer(this.props, this.setState));
    }*/

    render() {
        if(!this.state.userID) {
            window.location.replace("/");
            return <></>
        }
        if(this.state.id) {
            let iconName = this.state.bookmark === false ? "bi-bookmark" : "bi-bookmark-heart-fill",
                toolTip = this.state.bookmark === false ? "Bookmark removed!" : "Bookmark added!",
                careerData = this.state,
                regex = /,(?![^(]*\))/,
                count = 0;
            const skillsNeeded = this.state.skills.split(regex);   
            const skillList = skillsNeeded.map((skill) => {
                count ++;
                return (<li key={count}>{skill}</li>)
            });

            return (
                <>
                <LogoutTimer props={this.props} location={"/"} user={this.state.userID}/>
                    <div className="row vh-100" >
                        <div className="card border-0">
                            <Header/>
                            {/*<Body />*/}
                            <div className="mt-auto text-container col-10 offset-1">
                                <CareerCardImage image={careerData.image} alt={careerData.title}/>
                                <div className='bottom-left'>
                                    <div className='bg-primary bg-gradient bg-opacity-75'>
                                        <h2>{this.state.title}</h2>
                                        <h5 className="text-center">- {this.state.name} -</h5>  
                                    </div>
                                </div>
                            </div>
                            <div className="card-header border-0 bg-transparent">
                                <p className="card-text">
                                    <Hashtags search={this.state.hashtags} route={this.props.history}/>
                                    <OverlayTrigger placement="left" delay={{ hide: 400 }} overlay={ <Tooltip>{toolTip}</Tooltip> }>
                                        <button onClick={this.changeIcon} type="button" className="bg-transparent border-0 float-end bookmarkIcon" data-bs-container="body" data-bs-toggle="popover" data-bs-content="Bookmark added!">
                                            <i id="bookmark" className={`bi ${iconName}`}></i>
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
                                <p className="fw-bold mb-0 mt-3">Work environment:</p>
                                <p>{this.state.environment}</p>  
                                {/*<p className="fw-bold mb-0 mt-3">Number of people I work with:</p>
                                <Pay pay={this.state.pay}/> */}
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