import React, { useEffect } from 'react';
import { API_ROOT } from '../../packs/apiRoot';
import Footer from '../Footer';
import Header from '../Header';
import LogoutTimer from '../LogoutTimer';
import Body from './Body';
import { ShuffleButton } from './Shuffle';

export default class CareerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: localStorage.getItem('userID') ? localStorage.getItem('userID') : '1',
            id: props.location.state ? props.location.state.id : '',
            title: props.location.state ? props.location.state.title : '',
            name: props.location.state ? props.location.state.name : '',
            favorite: props.location.state ? props.location.state.favorite : '',
            skills: props.location.state ? props.location.state.skills : '',
            advice: props.location.state ? props.location.state.advice : '',
            education: props.location.state ? props.location.state.education : '',
            pay: props.location.state ? props.location.state.pay : '',
            environment: props.location.state ? props.location.state.environment : '',
            image: props.location.state ? props.location.state.image : '',
            bookmark: props.location.state ? props.location.state.bookmark : false,
            bookmarkArray: props.location.state ? props.location.state.bookmarkArray : [],
            cardIdarray: [],
            hashtags: props.location.state ? props.location.state.hashtags : [],
            previous: '',
            timer: ''
        };

        this.changeCareer = this.changeCareer.bind(this);
        this.previousCareer = this.previousCareer.bind(this);
        //this.logoutTimer = this.logoutTimer.bind(this);
        this.setState = this.setState.bind(this); 
        this.changeIcon = this.changeIcon.bind(this);   
        this.addBookmark = this.addBookmark.bind(this);
        this.removeBookmark = this.removeBookmark.bind(this);
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
                if (this.state.id === response.id) {
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
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Bad network response.");
            })
            .then(response => {
                this.setState({ cardIdarray: response.viewed_cards, bookmarkArray: response.bookmarks });
                this.setState({ bookmark: this.state.bookmarkArray.find(index => index == this.state.id) === undefined ? false : true });
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

    updateState(state) {
        this.setState({ state: state });
    }

    componentDidMount() {
        if (!this.props.location.state) {
            this.changeCareer();
        }
    }

    changeIcon() {
        const url = `${API_ROOT}/api/v1/users/update/${this.state.userID}`;
        let careerIdString = this.state.id.toString();
        let iconChange = this.state.bookmarkArray.includes(careerIdString) ? false : true;   //if this userID is in the array, then it should change to false

        this.setState({ bookmark: iconChange });
        if (iconChange === true) {
            this.addBookmark();
        }
        if (iconChange === false) {
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
                if (response.ok) {
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
            if (this.state.bookmarkArray[i] === this.state.id.toString()) {
                this.state.bookmarkArray.splice(i, 1)
            }
        }

        let updatedArray = this.state.bookmarkArray.filter(careers => careers !== currentCareer);
        this.setState({ bookmarkArray: updatedArray });
    }

    render() {
        if (!this.state.userID) {
            window.location.replace("/");
            return <></>
        }
        if (this.state.id) {
            return (
                <>
                    <LogoutTimer props={this.props} location={"/"} user={this.state.userID} />
                    <div className="row vh-100" >
                        <div className="card border-0">
                            <Header />
                            <Body state={this.state} history={this.props.history} changeIcon={this.changeIcon} />
                            <ShuffleButton current={this.state} setState={this.updateState} change={this.changeCareer} />
                            <Footer />
                        </div>
                    </div>
                </>
            );
        }

        return (
            <>
            </>
        )
    }
}