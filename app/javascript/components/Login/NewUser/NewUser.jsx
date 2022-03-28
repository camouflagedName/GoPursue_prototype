import React from 'react';
import { API_ROOT } from '../../../packs/apiRoot';
import Name from './Name';
import Age from './Age';
import Password from './Password';
import User from '../../UserData';
import Email from './Email';
import ResponseWait from './ResponseWait';

export default class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'email',
            input: 'Enter email address',
            email: '',
            name: '',
            age: '',
            password: '',
            password_confirmation: '',
            id: '',
            link: '',
            time: null,
            verifyEmailMsg: '',
            emailError: '',
        };
        this.verifyEmail = this.verifyEmail.bind(this);
        this.changePage = this.changePage.bind(this);
        //this.changePageBack = this.changePageBack.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setName = this.setName.bind(this);
        this.setAge = this.setAge.bind(this);
        this.createPassword = this.createPassword.bind(this);
        this.emailVerConfirmed = this.emailVerConfirmed.bind(this);
    }

    changePage(currentPage) {
        switch (currentPage) {
            case 'email':
                return (<Email header={this.changePage} input={this.inputChange} value={this.state.input} verify={this.verifyEmail} error={this.state.emailError} />);
            case 'waitForEmailRes':
                return (<ResponseWait header={this.state.verifyEmailMsg} email={this.state.email} changePage={this.emailVerConfirmed} />)
            case 'name':
                return (<Name header={this.changePage} input={this.inputChange} value={this.state.input} setState={this.setName} createPassword={this.createPassword} />);
            case 'age':
                return (<Age header={this.changePage} input={this.inputChange} value={this.state.input} setState={this.setAge} />);
            case 'interests':
                break;
            case 'password':
                return (<Password value={this.state.password} addUser={this.addUser.bind(this)} />);
        }
    }

    verifyEmail(event, email) {
        event.preventDefault();
        //this.setState({ verifyEmailMsg: "Your email is being verified.", currentPage: "waitForEmailRes", email: email })
        const url = `${API_ROOT}/api/v1/users/verify_email`

        fetch(url, {
            method: 'POST',
            headers: {
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                user: {
                    name: "temp",
                    age: 0,
                    password: "temp",
                    email: email
                }
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res)
            })
            .then(json => {
                json.error ? this.setState({ emailError: json.error })
                    :
                    this.setState({ verifyEmailMsg: json.message, currentPage: "waitForEmailRes", email: email })
            })
    }

    emailVerConfirmed() { 
        this.setState({ currentPage: "name", input:'' })
    }

    createPassword() {
        let nounArray = ['aardvark', 'flamingo', 'wolverine', 'squid', 'turtle', 'unicorn', 'kumquat', 'beagle', 'platypus', 'alpaca', 'opossum', 'beehives', 'noodles', 'waffle', 'tapioca', 'pineapple', 'bacon', 'bagel', 'potato', 'pickle', 'rutabaga', 'watermelon', 'cheesecake', 'banana', 'pork', 'muffin', 'papaya', 'custard', 'spatula', 'aglet', 'shishcabob', 'jukebox', 'leotard', 'deltoid'],
            adjArray = ['sizzling', 'hiccuping', 'spelunking', 'booming', 'waddling', 'bumbling', 'grappling', 'surfing', 'coddling', 'dazzling', 'adoring', 'pickling', 'flossing', 'babbling', 'tickling', 'maniacal', 'copious', 'tart', 'bodacious', 'frilly', 'psychedelic', 'husky', 'quirky', 'funky', 'ritzy', 'explosive'];
        let nounNum = Math.floor(Math.random() * nounArray.length);
        let adjNum = Math.floor(Math.random() * adjArray.length);
        let noun = nounArray[nounNum];
        let adj = adjArray[adjNum];
        const password = adj + ' ' + noun;
        this.setState({ password: password })
    }

    setEmail(newEmail) {
        this.setState({ currentPage: newHeader, input: '', email: newEmail });
    }

    setName(newHeader, newName) {
        this.setState({ currentPage: newHeader, input: '', name: newName });
    }

    setAge(newHeader, newAge) { //del this func
        this.setState({ currentPage: newHeader, input: '', age: newAge });
    }

    addUser(event) {
        event.preventDefault();
        let date = new Date();
        let month = date.getMonth() + 1;
        let hour = date.getHours();
        let currentDate = `${month.toString()}/${date.getDate().toString()}/${date.getFullYear().toString()} at ${hour.toString()}:${date.getMinutes().toString()}:${date.getSeconds().toString()}`
        let startTime = Date.now()
        this.setState({ time: date.getSeconds() })

        const url = `${API_ROOT}/api/v1/users/create`;

        fetch(url, {
            method: 'POST',
            headers: {
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                user: {
                    name: this.state.name,
                    email: this.state.email,
                    age: 0,
                    password: this.state.password,
                    password_confirmation: this.state.password,
                    created_on: currentDate,
                    num_logins: 1
                }
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Bad network response.");
            })
            .then(response => {
                const currentUser = new User(response.id, response.name, [], startTime)

                localStorage.setItem('userID', response.id);
                localStorage.setItem('user', response.name);
                localStorage.setItem('startTime', startTime);
                this.props.history.push({ pathname: "/main", state: { currentUser } })
            })
            .catch(error => console.log(error.message));
    }

    /*  changePageBack(){
          switch (this.state.header) {
              case 'My preferred name is':
                  this.setState({ input: '' });
                  break;
              case 'My age is':
                  this.setState({ 
                      header: 'My preferred name is', 
                      input: '',
                  });
                  break;
              case 'I am interested in':
                  this.setState({ header:  'My age is', input: ''});
          }
      }*/

    inputChange(event) {
        let input = event;
        switch (this.state.currentPage) {
            case 'name':
                this.setState({ name: input, input: input });
                break;
            case 'age':
                this.setState({ age: input, input: input });
                break;
            case 'interests':
                this.setState({ age: input, input: input });
                break;
        }
    }

    render() {
        return (
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row mb-5">
                            <img src={require(`../../../../assets/logo/logo(cropped).jpg`)} alt="logo" />
                        </div>
                        <div className="d-flex row">
                            <div className="col-12">
                                {this.changePage(this.state.currentPage)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
