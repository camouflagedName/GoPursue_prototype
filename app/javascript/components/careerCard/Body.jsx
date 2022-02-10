import React, { useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { API_ROOT } from '../../packs/apiRoot';
import { Hashtags } from './Hashtag';
import { CareerCardImage } from './CareerCardImage';


export default class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let careerCard = this.props.state,
            iconName = careerCard.bookmark === false ? "bi-bookmark" : "bi-bookmark-heart-fill",
            toolTip = careerCard.bookmark === false ? "Bookmark removed!" : "Bookmark added!",
            regex = /,(?![^(]*\))/,
            count = 0;
        const skillsNeeded = this.props.state.skills.split(regex);
        const skillList = skillsNeeded.map((skill) => {
            count++;
            return (<li key={count}>{skill}</li>)
        });

        return (
            <>
                <div className="mt-auto text-container col-10 offset-1">
                    <CareerCardImage image={careerCard.image} alt={careerCard.title} />
                    <div className='bottom-left'>
                        <div className='bg-primary bg-gradient bg-opacity-75'>
                            <h2>{careerCard.title}</h2>
                            <h5 className="text-center">- {careerCard.name} -</h5>
                        </div>
                    </div>
                </div>
                <div className="card-header border-0 bg-transparent">
                    <p className="card-text">
                        <Hashtags search={careerCard.hashtags} route={this.props.history} />
                        <OverlayTrigger placement="left" delay={{ hide: 400 }} overlay={<Tooltip>{toolTip}</Tooltip>}>
                            <button onClick={this.props.changeIcon} type="button" className="bg-transparent border-0 float-end bookmarkIcon" data-bs-container="body" data-bs-toggle="popover" data-bs-content="Bookmark added!">
                                <i id="bookmark" className={`bi ${iconName}`}></i>
                            </button>
                        </OverlayTrigger>
                    </p>
                </div>
                <div className="card-body">
                    <p className="fw-bold mb-0">Favorite part of my job:</p>
                    <p className="mt-0">{careerCard.favorite}</p>
                    <p className="fw-bold mb-0">Skills Needed:</p>
                    <ul>
                        {skillList}
                    </ul>
                    <p className="fw-bold mb-0">My Advice:</p>
                    <p className="mt-0">{careerCard.advice}</p>
                    <p className="fw-bold mb-0">My Education:</p>
                    <p className="mt-0">{careerCard.education}</p>
                    <p className="fw-bold mb-0">Average Pay:</p>
                    <p>{careerCard.pay}</p>
                    <p className="fw-bold mb-0 mt-3">Work environment:</p>
                    <p>{careerCard.environment}</p>
                    {/*<p className="fw-bold mb-0 mt-3">Number of people I work with:</p>
                    <Pay pay={this.state.pay}/> */}
                </div>
            </>
        );
    }
}