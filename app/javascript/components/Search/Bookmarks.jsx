import React from 'react';
import { API_ROOT } from '../../packs/apiRoot';
import { CareerCardImage } from '../CareerCard/CareerCardImage';

export default class Bookmarks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarkedCareers: [],
            userID: props.userData.userID,
            allCareers: []
        };
    }
//should I move this logic to the server side?
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
                if (response.ok) {
                    return response.json();
                }
                throw new Error("User Database: Bad network reponse.");
            })
            .then(json => {
                this.setState({ bookmarkedCareers: json.bookmarks })
            });
    }

    handleClick = (careerData) => {
        this.props.screen("careercard", careerData)
    }

    render() {
        const { allCareers } = this.state;
        const eachCareer = allCareers.map((careerData, index) => (
            (() => {
                for (let i = 0; i < this.state.bookmarkedCareers.length; i++) {
                    if (careerData.id.toString() === this.state.bookmarkedCareers[i].toString()) {
                        return (
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
                        )
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

