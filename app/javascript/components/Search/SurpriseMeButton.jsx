import React from 'react';
import { API_ROOT } from '../../packs/apiRoot';

export class SurpriseMeButton extends React.Component {
    ismounted = false;
    constructor(props) {
        super(props);
        this.state = { 
            userID: localStorage.getItem('userID'),
            id: '',
            title: '',
            name: '',
            favorite: '',
            skills: '',
            advice: '',
            education: '',
            pay: '',
            environment: '',
            image: '',
            bookmark: false,
            bookmarkArray: [],
            hashtags: []
        };

        this.changeCareer = this.changeCareer.bind(this);

    }

    changeCareer() {
        this.ismounted = true;
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
            if(this.ismounted) {
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
                })
            }
        });

        fetch(userURL)
        .then(response => {
            if (response.ok) {       
                return response.json();
            }
            throw new Error("Bad network response.");
        })
        .then(response => {
            if(this.ismounted) {
                this.setState({ bookmarkArray: response.bookmarks });
                this.setState( { bookmark: this.state.bookmarkArray.find(index => index == this.state.id) === undefined ? false : true });
            }
        });
        this.props.history.push({
            pathname: "/careercard",
            state: { 
                id: this.state.id,
                title: this.state.title,
                name: this.state.name,
                favorite: this.state.favorite,
                skills: this.state.skills,
                advice: this.state.advice,
                education: this.state.education,
                pay: this.state.pay,
                environment: this.state.environment,
                image: this.state.image,
                bookmark: this.state.bookmark,
                hashtags: this.state.hashtags,
                bookmarkArray: this.state.bookmarkArray
            }
        })
    }
    componentWillUnmount(){
        this.ismounted = false;
    }

    render() {
        return (
            <button onClick={this.changeCareer} className="btn btn-primary btn-md me-1">
                Surprise Me!
            </button>
        )
    }
}