import React from 'react';
import { API_ROOT } from '../../packs/apiRoot';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default class Launch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            careers: []
        };
    }

    componentDidMount() {
        const url = `${API_ROOT}/api/v1/careers/index`;

        fetch(url)
        .then(response => {
            if (response.ok) {       
                return response.json();
            }
            throw new Error("Bad network response.");
        })
        .then(response => {
            this.setState({ careers: response })
        });
        
    }

    render() {
        const {careers} = this.state;
        const eachCareer = careers.map((career) =>(
            (() => {
                if(career.bookmark==="true"){
                    return <Link className='text-decoration-none text-dark'
                        to={{
                            pathname: "/careerCard",
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
                                bookmark: career.bookmark
                            }
                        }}>
                        <div className='offset-3 mb-4'>
                            <div className="card w-75 text-center">
                                <img src={require(`../../../assets/images/${career.image}`)} className="card-img-top" alt={`Picture of ${career.image}`}/>
                                <div className='card-body'>
                                    <p className='card-title fs-4'>{career.title}</p>
                                </div>
                            </div>  
                        </div>
                    </Link>
                }})()            
        ));
        return (
            <>
                <div className="container">
                    <div className="row">
                        <h3 className="text-center">Your Bookmarks</h3>
                    </div>
                    <div className="row">
                        {eachCareer}
                    </div>
                        <Footer />
                </div>
            </>    
        );
    }
}

