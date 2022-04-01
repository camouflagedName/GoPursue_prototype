import React from 'react' //needed?

const EnvImage = (props) => {
    //let imgURL = require(`../../../../../assets/images/environments/${props.image}`)
    
    return (
        <div className="mb-3">
            <img className="img-fluid rounded" id='careerCardImg' src={imgURL} alt={`Picture of career environments for ${props.alt}`} />
        </div>
    );
}

export default EnvImage