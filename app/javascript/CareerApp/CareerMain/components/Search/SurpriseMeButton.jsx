import React from 'react';
import { API_ROOT } from '../../../../packs/apiRoot';

export class SurpriseMeButton extends React.Component {
    ismounted = false;
    constructor(props) {
        super(props);
        this.state = { 
            userID: localStorage.getItem('userID'),
            id: '',
            title: '',
            name: '',
            description: '',
            favorite: '',
            skills: '',
            advice: '',
            education: '',
            pay: '',
            environment: '',
            image: '',
            envImgs: '',
            bookmark: false,
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
                    description: response.description,
                    favorite: response.favorite,
                    skills: response.skills,
                    advice: response.advice,
                    education: response.education,
                    pay: response.pay,
                    environment: response.environment,
                    envImgs: response.addtl_img,
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

        this.props.screen("careercard", this.state)
    }

    componentWillUnmount(){
        this.ismounted = false;
    }

    render() {
        return (
            <button onClick={this.changeCareer} className="btn btn-primary btn-lg me-1">
                Surprise Me!
            </button>
        )
    }
}