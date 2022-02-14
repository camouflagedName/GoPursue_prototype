import React from "react";

export class CareerCardImage extends React.Component {
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

    componentDidUpdate(prevProps) {
        let regex = /http/;
        if (this.props.image !== prevProps.image) {
            this.setState({ imgURL: regex.test(this.props.image) ? this.props.image : require(`../../../assets/images/professionals/${this.props.image}`) });
        }
    }

    render() {
        return (
            <>
                <img className="img-fluid rounded" id='careerCardImg' src={this.state.imgURL} alt={`Picture for career ${this.props.alt}`} />
            </>
        )
    }
}
//remove state from this component in the future --Feb 13 note