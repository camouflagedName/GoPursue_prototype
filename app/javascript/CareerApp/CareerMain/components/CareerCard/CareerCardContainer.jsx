import React from 'react' //needed?

const CareerCardContainer = (props) => {

    return (
        <>
            <div className={`card mb-3 shadow rounded-3 border border-3 ${props.style.boxBorder}`}>
                <div className="card-body" style={{ backgroundColor: `${props.style.boxColor}`, color: `${props.style.textColor}` }}>
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </>
    );
}

export default CareerCardContainer