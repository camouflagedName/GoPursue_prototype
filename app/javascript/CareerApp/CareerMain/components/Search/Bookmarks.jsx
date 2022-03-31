import React from 'react';
import { API_ROOT } from '../../../../packs/apiRoot';
import { CareerCardImage } from '../CareerCard/CareerCardImage';

export default class Bookmarks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarkedCareerIDs: [],
            userID: props.userData.userID,
            bookmarkedCareers: [],
        };
    }

    componentDidMount() {
        const url = `${API_ROOT}/api/v1/careers/bookmarks`;
        const userURL = `${API_ROOT}/api/v1/users/show/${this.state.userID}`;

        //fetch bookmarks from user data
        fetch(userURL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("User Database: Bad network reponse.");
            })
            .then(json => {
                this.setState({ bookmarkedCareerIDs: json.bookmarks })
                return json.bookmarks
            })
            .then((bookmarks) => {
                //fetch bookmarked career data
                fetch(url, {
                    method: 'POST',
                    headers: {
                        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({
                        bookmark_array: bookmarks
                    })
                })
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error("Career Database: Bad network response.");
                    })
                    .then(response => {
                        this.setState({ bookmarkedCareers: response })
                    })
            })
    }

    handleClick = (careerData) => {
        this.props.screen("careercard", careerData)
    }

    render() {
        const { bookmarkedCareers } = this.state;
        const eachCareer = bookmarkedCareers.map((careerData, index) => ((() => {
                for (let i = 0; i < this.state.bookmarkedCareerIDs.length; i++) {
                    // if (careerData.id.toString() === this.state.bookmarkedCareerIDs[i].toString()) {  //put this logic on the backend
                    careerData.bookmark = true //this should occur on the Body Component or in a more logical/replicatable way
                    return (
                        <a key={index} className='text-decoration-none text-dark' onClick={() => this.handleClick(careerData)}>
                            <div key={index} className='offset-1 mb-4'>
                                <div className={`card text-center ${this.props.style.boxBorder}`} style={{ backgroundColor: `${this.props.style.boxColor}`, color: `${this.props.style.textColor}` }}>
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
                    // }
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

