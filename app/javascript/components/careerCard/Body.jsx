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
                            <h4 className="text-center">- {careerCard.name} -</h4>
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
                    <div className={`card mb-3 shadow rounded-3 border border-3 ${this.props.style.boxBorder}`}>
                        <div className="card-body" style={{ backgroundColor: `${this.props.style.boxColor}`, color: `${this.props.style.textColor}`}}>
                            <h4 className="card-title">Favorite part of my job:</h4>
                            <p className="card-text">{careerCard.favorite}</p>
                        </div>
                    </div>
                    <div className={`card mb-3 shadow rounded-3 border border-3 ${this.props.style.boxBorder}`}>
                        <div className="card-body" style={{ backgroundColor: `${this.props.style.boxColor}`, color: `${this.props.style.textColor}`}}>
                            <h4 className="card-title">Skills Needed:</h4>
                            <ul>
                                {skillList}
                            </ul>
                        </div>
                    </div>
                    <div className={`card mb-3 shadow rounded-3 border border-3 ${this.props.style.boxBorder}`}>
                        <div className="card-body" style={{ backgroundColor: `${this.props.style.boxColor}`, color: `${this.props.style.textColor}`}}>
                            <h4 className="card-title">My Advice:</h4>
                            <p className="card-text">{careerCard.advice}</p>
                        </div>
                    </div>
                    <div className={`card mb-3 shadow rounded-3 border border-3 ${this.props.style.boxBorder}`}>
                        <div className="card-body" style={{ backgroundColor: `${this.props.style.boxColor}`, color: `${this.props.style.textColor}`}}>
                            <h4 className="card-title">My Education:</h4>
                            <p className="card-text">{careerCard.education}</p>
                        </div>
                    </div>
                    <div className={`card mb-3 shadow rounded-3 border border-3 ${this.props.style.boxBorder}`}>
                        <div className="card-body" style={{ backgroundColor: `${this.props.style.boxColor}`, color: `${this.props.style.textColor}`}}>
                            <h4 className="card-title">Average Pay:</h4>
                            <p className="card-text">{careerCard.pay}</p>
                        </div>
                    </div>
                    <div className={`card mb-3 shadow rounded-3 border border-3 ${this.props.style.boxBorder}`}>
                        <div className="card-body" style={{ backgroundColor: `${this.props.style.boxColor}`, color: `${this.props.style.textColor}`}}>
                            <h4 className="card-title">Work Environment:</h4>
                            <p className="card-text">{careerCard.environment}</p>
                        </div>
                    </div>
                    {/*<p className="fw-bold mb-0 mt-3">Number of people I work with:</p>
                    <Pay pay={this.state.pay}/> */}
                </div>
            </>
        );
    }
}