import React from "react";

const Image = (props) => {
    let imgURL = `https://gopursue-images.s3.amazonaws.com/professionals/${props.image}`
    
    return (
        <div className="mb-3">
            <img className="img-thumbnail" src={imgURL} alt={`Picture of ${props.alt}`} />
        </div>
    );
}

export default Image
/*
export class Image extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgURL: null
        }
    }

    componentDidMount() {
        //if uploaded through the admin portal, the picture path will have an http protocal attached
        let regex = /http/;       
        this.setState({ imgURL: regex.test(this.props.image) ? this.props.image : require(`../../../../assets/images/professionals/${this.props.image}`) });
    }

    render() {

        return (
            <>
                <img className="img-thumbnail" src={this.state.imgURL}/>
            </>
        )
    }
}*/