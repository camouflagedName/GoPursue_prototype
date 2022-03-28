import React, { useEffect } from 'react'


const BodyImage = (props) => {

    imgURL =require(`../../../assets/images/professionals/${props.image}`)
    
    return (
        <>
            <img className="img-fluid rounded" id='careerCardImg' src={props.imgSrc} alt={`Picture of career environments for ${props.alt}`} />
        </>
    );
}

export default BodyImage