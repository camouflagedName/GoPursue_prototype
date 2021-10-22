import React from 'react';
import { API_ROOT } from '../../packs/apiRoot';
import { Link } from 'react-router-dom';
import { CareerCardImage } from '../careerCard/CareerCardImage';

export default class Bookmarks extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            careers: [],
            userID: localStorage.getItem('userID'),
            allCareers: []
        };
    }

    componentDidMount() {
        const url = `${API_ROOT}/api/v1/careers/index`;
        const userURL = `${API_ROOT}/api/v1/users/show/${this.state.userID}`;

        fetch(url)
        .then(response => {
            if (response.ok) {       
                return response.json();
            }
            throw new Error("Career Database: Bad network response.");
        })
        .then(response => {
            this.setState({ allCareers: response })
        });

        fetch(userURL)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error("User Database: Bad network reponse.");
        })
        .then(json => {
            this.setState({ careers: json.bookmarks })
        });
        
    }

    render() {
        const {allCareers} = this.state;
        const eachCareer = allCareers.map((career, index) =>(
            (() => {
                for(let i = 0; i < this.state.careers.length; i++){
                    if(career.id.toString() === this.state.careers[i].toString()){
                        return <Link key={index} className='text-decoration-none text-dark'
                            to={{
                                pathname: "/careercard",
                                state: {
                                    id: career.id,
                                    title: career.title,
                                    name: career.name,
                                    favorite: career.favorite,
                                    skills: career.skills,
                                    advice: career.advice,
                                    education: career.education,
                                    pay: career.pay,
                                    environment: career.environment,
                                    image: career.image,
                                    bookmark: true,
                                    hashtags: career.hashtag,
                                    bookmarkArray: this.state.careers
                                }
                            }}>
                            <div key={index} className='offset-3 mb-4'>
                                <div className="card w-75 text-center">
                                    <CareerCardImage image={career.image} alt={career.title}/>
                                    <div className='card-body'>
                                        <p className='card-title fs-4'>{career.title}</p>
                                    </div>
                                </div>  
                            </div>
                        </Link>
                    }    
                }

            })()            
        ));
        return (
            <>
                <div className="row">
                    {eachCareer}
                </div>
            </>    
        );
    }
}

