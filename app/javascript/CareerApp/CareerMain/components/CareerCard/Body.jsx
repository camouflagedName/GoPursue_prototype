import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Hashtags } from './Hashtag';
import { CareerCardImage } from './CareerCardImage'
import CareerCardContainer from './CareerCardContainer';
import EnvImage from './EnvImage'

export default class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let careerCard = this.props.state,
            iconName = careerCard.bookmarkIsSelected === false ? "bi-bookmark" : "bi-bookmark-heart-fill",
            toolTip = careerCard.bookmarkIsSelected === false ? "Bookmark removed!" : "Bookmark added!",
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
                    <CareerCardImage image={careerCard.image} alt={careerCard.title} /> {/* in the future, may need to move state from child comp to parent */}
                    <div className='bottom-left'>
                        <div className='bg-primary bg-gradient bg-opacity-75'>
                            <h2>{careerCard.title}</h2>
                            <h4 className="text-center">- {careerCard.name} -</h4>
                        </div>
                    </div>
                </div>
                <div className="card-header border-0 bg-transparent">
                    <p className="card-text">
                        <Hashtags search={careerCard.hashtags} screen={this.props.screen} />
                        <OverlayTrigger placement="left" delay={{ hide: 400 }} overlay={<Tooltip>{toolTip}</Tooltip>}>
                            <button onClick={this.props.changeIcon} type="button" className="bg-transparent border-0 float-end bookmarkIcon" data-bs-container="body" data-bs-toggle="popover" data-bs-content="Bookmark added!">
                                <i id="bookmark" className={`bi ${iconName}`} style={{ color: this.props.style.iconColor }} ></i>
                            </button>
                        </OverlayTrigger>
                    </p>
                </div>
                <div className="card-body">
                    <CareerCardContainer title={"Job Description:"} text={careerCard.description} style={this.props.style} />
                    {
                        careerCard.envImgs[0]
                            ? <EnvImage image={careerCard.envImgs[0]} alt={careerCard.title} />
                            : <></>
                    }
                    <CareerCardContainer title={"Favorite part of my job:"} text={careerCard.favorite} style={this.props.style} />
                    <div className={`card mb-3 shadow rounded-3 border border-3 ${this.props.style.boxBorder}`}>
                        <div className="card-body" style={{ backgroundColor: `${this.props.style.boxColor}`, color: `${this.props.style.textColor}` }}>
                            <h4 className="card-title">Skills Needed:</h4>
                            <ul>
                                {skillList}
                            </ul>
                        </div>
                    </div>
                    <CareerCardContainer title={"Work Environment"} text={careerCard.environment} style={this.props.style} />
                    {
                        careerCard.envImgs[1]
                            ? <EnvImage image={careerCard.envImgs[1]} alt={careerCard.title} />
                            : <></>
                    }
                    <CareerCardContainer title={"My Education:"} text={careerCard.education} style={this.props.style} />
                    <CareerCardContainer title={"Average Pay:"} text={careerCard.pay} style={this.props.style} />
                    {
                        careerCard.envImgs[2]
                            ? <EnvImage image={careerCard.envImgs[2]} alt={careerCard.title} />
                            : <></>
                    }
                    <CareerCardContainer title={"My Advice:"} text={careerCard.advice} style={this.props.style} />
                    {/*<p className="fw-bold mb-0 mt-3">Number of people I work with:</p>
                    <Pay pay={this.state.pay}/> */}
                </div>
            </>
        );
    }
}