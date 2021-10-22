import React from "react";

export class Image extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgURL: null
        }
    }

    componentDidMount() {
        let regex = /http/;       
        this.setState({ imgURL: regex.test(this.props.image) ? this.props.image : require(`../../../assets/images/professionals/${this.props.image}`) });
    }
    render() {

        return (
            <>
                <img className="img-thumbnail" src={this.state.imgURL}/>
            </>
        )
    }
}