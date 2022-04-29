import React from 'react' //needed?

const CardImage = (props) => {
    let imgURL = `https://gopursue-images.s3.amazonaws.com/${props.type}/${props.image}`
    
    return (
        <div className="mb-3">
            <img className="img-fluid rounded" id='careerCardImg' src={imgURL} alt={`Picture of career environments for ${props.alt}`} />
        </div>
    );
}

export default CardImage