import React, { useEffect } from 'react';
import { API_ROOT } from '../../packs/apiRoot';
import Body from './Body';
import { ShuffleButton } from './Shuffle';
import Loading_spinner from '../../../assets/icons/Loading_spinner.svg'


export default class CareerCard extends React.Component {
    //this contains all logic and passes down rendering to child components --> may need to check for logic contained in child components and remove/refactor 

    // also for future --> refactor to use hooks instead of classes
    constructor(props) {
        super(props);
        this.state = { //should state be initialized with props??
            userID: props.userData.userID,
            bookmarkArray: props.userData.bookmarks,
            timer: '',

            id: props.state ? props.state.id : '',
            title: props.state ? props.state.title : '',
            name: props.state ? props.state.name : '',
            favorite: props.state ? props.state.favorite : '',
            skills: props.state ? props.state.skills : '',
            advice: props.state ? props.state.advice : '',
            education: props.state ? props.state.education : '',
            pay: props.state ? props.state.pay : '',
            environment: props.state ? props.state.environment : '',
            image: props.state ? props.state.image : '',
            bookmark: props.state ? props.state.bookmark : false,
            cardIdarray: [],
            hashtags: props.state ? props.state.hashtag : [],
            previous: '',
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

        //use an async api to fetch data whenever the page is reloaded or the shuffle button is used
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
    }

    previousCareer() { //sets state to previous career *currently not in use - may be used for future versions*
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
        )
    }

    updateState(state) { //deprecated?
        this.setState({ state: state });
    }

    componentDidMount() {
        if(!this.state.id) {
            this.changeCareer();
        }

        let updatedBookmark = this.state.bookmarkArray.find(index => index == this.state.id) === undefined ? false : true
        if(this.state.bookmark !== updatedBookmark) {
            this.setState({ bookmark: updatedBookmark })
        }
    }

    /*componentDidUpdate() {
        let updatedBookmark = this.state.bookmarkArray.find(index => index == this.state.id) === undefined ? false : true
        if(this.state.bookmark !== updatedBookmark) {
            this.setState({ bookmark: updatedBookmark })
        }

    }*/

    changeIcon() { //alters the bookmark icon and sends a call to the database with a push to an array of bookmarked cards
        const url = `${API_ROOT}/api/v1/users/update/${this.state.userID}`;
        let careerIdString = this.state.id.toString();
        let iconChange = this.state.bookmarkArray.includes(careerIdString) ? false : true;   //if the current career card ID is in the array, then it should change to false

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
        if (this.state.id) {
            return (
                <>
                    <Body state={this.state} changeIcon={this.changeIcon} style={this.props.style} screen={this.props.screen} />
                    <ShuffleButton current={this.state} change={this.changeCareer} />
                </>
            )
        }
        //loading icon if data has not loaded
        return (
            < div className="mt-auto col-8 offset-4" >
                <img src={Loading_spinner} alt='loading icon' />
            </div >
        )
    }
}