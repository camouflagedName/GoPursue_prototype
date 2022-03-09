import React from 'react';
import { Link } from 'react-router-dom';
import { CareerCardImage } from '../CareerCard/CareerCardImage';

export class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = { bookmark: '' }
        this.getBookmark = this.getBookmark.bind(this);
    }

    getBookmark(id) {
        let bookmarkState = this.props.user.includes(id) ? true : false
        this.setState({ bookmark: bookmarkState });
    }

    handleClick = (careerData) => {
        this.props.screen("careercard", careerData)
    }


    render() {
        const allResults = this.props.results;
        const results = allResults.map((careerData, index) => {
            let bookmarkState = this.props.user.includes(careerData.id.toString()) ? true : false;
            return (
                <div key={index} className="col-10 offset-1">
                    <a key={index} className='text-decoration-none text-dark' onClick={() => this.handleClick(careerData)}>
                        <div key={index} className='offset-1 mb-4'>
                            <div className={`card text-center ${this.props.style.boxBorder}`} style={{ backgroundColor: `${this.props.style.boxColor}`, color: `${this.props.style.textColor}`}}>
                                <div className="row g-0">
                                    <div className="col-4 d-flex align-items-center">
                                        <CareerCardImage image={careerData.image} alt={careerData.title} />
                                    </div>
                                    <div className="col-8">
                                        <div className='card-body'>
                                            <p className='card-title'>{careerData.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
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
                <h4 className="text-center" style={{color: `${this.props.style.textColor}`}}>Displaying careers that match <span className="text-primary">{this.props.term}</span>:</h4>
                <hr />
                {this.props.results ? results : noResults}
            </div>
        )
    }
}