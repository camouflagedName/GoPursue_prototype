import React from 'react';
import { Link } from 'react-router-dom';
import { CareerCardImage } from '../careerCard/CareerCardImage';

export class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = { bookmark: '' }
        this.getBookmark = this.getBookmark.bind(this);
    }

    getBookmark(id) {
        //let bookmarkState = this.props.user.find(index => index == id) === undefined ? false : true;
        let bookmarkState = this.props.user.includes(id) ? true : false
        this.setState({ bookmark: bookmarkState });
        console.log(this.state);
    }


    render() {
        const allResults = this.props.results;
        const results = allResults.map((career, index) =>
        {    
            let bookmarkState = this.props.user.includes(career.id.toString()) ? true : false;
            return (
                <div key={index} className="col-10 offset-1">
                    <Link 
                        key={index}
                        className='text-decoration-none text-dark'
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
                                hashtags: career.hashtag,
                                bookmark: bookmarkState,
                                bookmarkArray: this.props.user
                            }
                        }}>
                        <div key={index} className='offset-1 mb-4'>
                            <div className="card text-center">
                                <div className="row g-0">
                                    <div className="col-4 d-flex align-items-center">
                                        <CareerCardImage image={career.image} alt={career.title}/>              
                                    </div>
                                    <div className="col-8">
                                        <div className='card-body'>
                                            <p className='card-title'>{career.title}</p>
                                        </div>           
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </Link>
                </div>
            );
        });
        const noResults = (
            <div className="d-flex flex-column">
                <ul className="flex-column mb-auto">
                    <p>Enter a keyword to begin your search.</p>
                </ul>
            </div>
        );
        return (
            <div className="mt-5">
                <h4 className="text-center">Displaying careers that match <span className="text-primary">{this.props.term}</span>:</h4>
                <hr/>
                {this.props.results ? results : noResults}
            </div>
        )
    }
}