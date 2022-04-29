import React from 'react'
import { API_ROOT } from '../../../packs/apiRoot'
import Body from '../components/CareerCard/Body'
import { ShuffleButton } from '../components/CareerCard/Shuffle'
import Loading_spinner from '../../../../assets/icons/Loading_spinner.svg'

export default class CareerCard extends React.Component {
    //this contains all logic and passes down rendering to child components --> may need to check for logic contained in child components and remove/refactor 

    // also for future --> refactor to use hooks instead of classes
    constructor(props) {
        super(props);
        this.state = { //should state` be initialized with props in constructor??
            bookmarkArray: props.userData.bookmarks,
            timer: '',
            //check to see if careerData was passed from bookmark/search/etc page
            careerCardID: props.careerData ? props.careerData.id : '',
            title: props.careerData ? props.careerData.title : '',
            name: props.careerData ? props.careerData.name : '',
            description: props.careerData ? props.careerData.description : '',
            favorite: props.careerData ? props.careerData.favorite : '',
            skills: props.careerData ? props.careerData.skills : '',
            advice: props.careerData ? props.careerData.advice : '',
            education: props.careerData ? props.careerData.education : '',
            pay: props.careerData ? props.careerData.pay : '',
            environment: props.careerData ? props.careerData.environment : '',
            image: props.careerData ? props.careerData.image : '',
            envImgs: props.careerData ? props.careerData.addtl_img : [],
            bookmarkIsSelected: props.careerData ? props.careerData.bookmark : false,
            viewedCardsArr: [],
            hashtags: props.careerData ? props.careerData.hashtag : [],
            previous: '',
        };

        this.changeCareer = this.changeCareer.bind(this);
        //this.previousCareer = this.previousCareer.bind(this);
        //this.logoutTimer = this.logoutTimer.bind(this);
        this.setState = this.setState.bind(this);
        this.changeIcon = this.changeIcon.bind(this);
    }

    userData = this.props.userData

    changeCareer() {
        /*let careerCardID = Math.floor((Math.random() * 22) + 1);
        if(careerCardID === this.state.careerCardID) {
            this.changeCareer();
        } */
        const url = `${API_ROOT}/api/v1/careers/random_career`;
        const userDataURL = `${API_ROOT}/api/v1/users/data/${this.userData.userID}`;

        //use an async api to fetch data whenever the page is reloaded or the shuffle button is used
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Bad network response.");
            })
            .then(json => {
                if (this.state.careerCardID === json.id) {
                    this.changeCareer();
                    return;
                }
                this.setState({
                    careerCardID: json.id,
                    title: json.title,
                    name: json.name,
                    description: json.description,
                    favorite: json.favorite,
                    skills: json.skills,
                    advice: json.advice,
                    education: json.education,
                    pay: json.pay,
                    environment: json.environment,
                    image: json.image,
                    envImgs: json.addtl_img,
                    hashtags: json.hashtag,
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
                    body: JSON.stringify({ viewed_cards: [this.state.careerCardID.toString()] })
                })
                .then(response => {
                    if (response.ok && response.json) {
                        return response.json();
                    }
                    throw new Error("Bad network response.");
                })
                .then(json => {
                    let isCurrentMarked = json.bookmarks.find(index => index == this.state.careerCardID) === undefined ? false : true
                    //console.log(`bookmark fetch - isCurrentMarked: ${isCurrentMarked}`)
                    //this.setState({ viewedCardsArr: json.viewed_cards, bookmarkArray: json.bookmarks, bookmarkIsSelected: isCurrentMarked });
                    this.setState({ viewedCardsArr: json.viewed_cards, bookmarkIsSelected: isCurrentMarked })
            })
                .catch(error => console.log(error.message));
            })
            .catch(error => console.log(error.message));
    }

    //sets state to previous career *currently not in use - may be used for future versions*
    /*
    previousCareer() {
        this.setState(
            {
                careerCardID: this.state.previous.careerCardID,
                title: this.state.previous.title,
                name: this.state.previous.name,
                description: this.state.previous.description,
                favorite: this.state.previous.favorite,
                skills: this.state.previous.skills,
                advice: this.state.previous.advice,
                education: this.state.previous.education,
                pay: this.state.previous.pay,
                environment: this.state.previous.environment,
                image: this.state.previous.image,
                envImgs: this.state.previous.envImgs,
                hashtags: this.state.previous.hashtags,
                previous: this.state.previous.previous
            }
        )
    }
    */

    updateState(state) { //deprecated?
        this.setState({ state: state });
    }

    componentDidMount() {
        if (!this.state.careerCardID) {
            this.changeCareer();
        }
    }

    componentWillUnmount() {
        this.setState({ bookmarkIsSelected: false })
    }


    //alter the bookmark icon and send a call to the database with a push to an array of bookmarked cards
    changeIcon() {
        let careerIdString = this.state.careerCardID.toString();

        const addBookmark = () => {
            let currentBookmarks = this.userData.bookmarks;
            let currentCareer = careerIdString
            
            currentBookmarks.push(currentCareer);
            this.setState({ bookmarkArray: currentBookmarks, bookmarkIsSelected: true });
            this.props.updateUser(currentBookmarks)
            sendBookmarkData(currentBookmarks)
        }

        const removeBookmark = () => {
            let currentCareer = careerIdString
            //parse through bookmarkArray and remove
            let updatedArray = this.userData.bookmarks.filter(careers => careers !== currentCareer);
            this.setState({ bookmarkArray: updatedArray, bookmarkIsSelected: false });
            this.props.updateUser(updatedArray)
            sendBookmarkData(updatedArray)
        }

        //update user data
        const sendBookmarkData = (bookmarkArray) => {
            const url = `${API_ROOT}/api/v1/users/update/${this.userData.userID}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ user: { bookmarks: bookmarkArray } })
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Bad network response.");
                })
                .catch(error => console.log(error.message));
        }
        // this.state.bookmarkArray.includes(careerIdString) === true ? this.removeBookmark : this.addBookmark;   //if the current career card ID is in the array, then it should change to false
        this.state.bookmarkIsSelected === true ? removeBookmark() : addBookmark()  //if the current career card ID is in the array, then it should change to false on click
    }

    render() {
        console.log(this.state)
        console.log(this.props.careerData || 'props does not exist yet')
        if (this.state.careerCardID)        // this.state.bookmarkArray.includes(careercareerCardIDString) === true ? this.removeBookmark : this.addBookmark;   //if the current career card ID is in the array, then it should change to false
        {
            return (
                <>
                    <Body state={this.state} changeIcon={this.changeIcon} style={this.props.style} screen={this.props.screen} />
                    <ShuffleButton current={this.state} change={this.changeCareer} />
                </>
            )
        }

        //load icon if data has not loaded
        return (
            <>
                < div className="mt-auto mb-5 col-6 offset-3" >
                    <img src={Loading_spinner} alt='loading icon' />
                </div >
                <div className="card-body mt-5">
                    <div className="col-10 mx-auto mb-4 d-grid gap-2 justify-content-center">
                    </div>
                </div>
            </>
        )
    }
}