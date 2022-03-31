import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import LogoutTimer from '../../components/LogoutTimer'
import Style from '../../components/Style'
import { CurrentScreen } from './utils/CurrentScreen'

export default class AppMain extends React.Component {
    //this contains all logic and passes down rendering to child components --> may need to check for logic contained in child components and remove/refactor 

    // also for future --> refactor to use hooks instead of classes
    constructor(props) {
        super(props);
        this.state = { //should state be initialized with props??
            currentUser: this.props.history.location.state ? this.props.history.location.state.currentUser : null,
            userID: this.props.history.location.state ? this.props.history.location.state.currentUser.userID : null,
            timer: '',

            style: localStorage.getItem('darkMode') ? Style.darkModeStyle : Style.defaultStyle,

            screen: "careercard",
            props: "",
        }


        //this.logoutTimer = this.logoutTimer.bind(this);
        this.changeScreenState = this.changeScreenState.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
    }

    //renders a different screen so users can navigate through app
    changeScreenState = (screen, ...props) => {
        this.setState({ screen: screen, props: props })
    }

    changeStyle = () => {
        localStorage.getItem('darkMode') ?
            (
                this.setState({ style: Style.defaultStyle }),
                localStorage.removeItem('darkMode')
            )
            :
            (
                this.setState({ style: Style.darkModeStyle }),
                localStorage.setItem('darkMode', true)
            )
    }

    unload = e => {
        e.preventDefault()
        console.log(e)
        //localStorage.clear()
    }

    componentDidMount() {
        //window.addEventListener("beforeunload", this.unload )
    }

    componentDidUpdate() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }

    render() {
        if (!this.state.userID) {
            window.location.replace("/");
            return <></>
        }
//change CurrentScreen to ternary operator
        return (
            <>
                <LogoutTimer startTime={this.state.currentUser.appStartTime} location={"/"} user={this.state.userID} />
                <div className="row vh-100" >
                    <div className="card border-0" style={{ backgroundColor: `${this.state.style.bgColor}` }}>
                        <Header changeStyle={this.changeStyle} logo={this.state.style.logo} style={this.state.style} />
                        <CurrentScreen screenName={this.state.screen} stateProps={this.state.props} screenState={this.changeScreenState} currentUser={this.state.currentUser} style={this.state.style} />
                        <Footer style={this.state.style} screen={this.changeScreenState} />
                    </div>
                </div>
            </>
        );
    }
    //loading animation/gif
}