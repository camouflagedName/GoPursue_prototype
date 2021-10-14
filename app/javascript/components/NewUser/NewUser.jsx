import React from 'react';
import { API_ROOT } from '../../packs/apiRoot';
import Name from './Name';
import Age from './Age';
import Password from './Password';

export default class NewUser extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            header: 'name',
            input: '',
            name: '',
            age: '',
            password: '',
            password_confirmation: '',
            id: '',
            link: ''
        };
        this.changeHeader = this.changeHeader.bind(this);
        //this.changeHeaderBack = this.changeHeaderBack.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.setName = this.setName.bind(this);
        this.setAge = this.setAge.bind(this);
        this.createPassword = this.createPassword.bind(this);
    }

    changeHeader(){
        switch (this.state.header) {
            case 'name':
                return(<Name header={this.changeHeader} input={this.inputChange} value={this.state.input} setState={this.setName} createPassword={this.createPassword} />);
            case 'age':
                return(<Age header={this.changeHeader} input={this.inputChange} value={this.state.input} setState={this.setAge} />);
            case 'interests':
                
                break;
            case 'password':
                return(<Password value={this.state.password} addUser={this.addUser.bind(this)} />);
        }
    }

    createPassword(){
        let nounArray = ['aardvark', 'flamingo', 'wolverine', 'squid', 'turtle', 'unicorn', 'kumquat', 'beagle', 'platypus', 'alpaca', 'opossum', 'beehives', 'noodles', 'waffle', 'tapioca', 'pineapple', 'bacon', 'bagel', 'potato', 'pickle', 'rutabaga', 'watermelon', 'cheesecake', 'banana', 'pork', 'muffin', 'papaya', 'custard', 'spatula', 'aglet', 'shishcabob', 'jukebox', 'leotard', 'deltoid'],
            adjArray = ['sizzling', 'hiccuping', 'spelunking', 'booming', 'waddling', 'bumbling', 'grappling', 'surfing', 'coddling', 'dazzling', 'adoring', 'pickling', 'flossing', 'babbling', 'tickling', 'maniacal', 'copious', 'tart', 'bodacious', 'frilly', 'psychedelic', 'husky', 'quirky', 'funky', 'ritzy', 'explosive'];
        let nounNum = Math.floor(Math.random() * nounArray.length);
        let adjNum = Math.floor(Math.random() * adjArray.length);
        let noun = nounArray[nounNum];
        let adj = adjArray[adjNum];
        const password = adj + ' ' + noun;
        this.setState( { password: password })
    }

    setName(newHeader, newName){
        this.setState( {header: newHeader, input: '', name: newName});
    }

    setAge(newHeader, newAge){
        this.setState( {header: newHeader, input: '', age: newAge});
    }

    addUser(event){
        event.preventDefault();
        const url = `${API_ROOT}/api/v1/users/create`;
        
        fetch(url, {
            method: 'POST',
            headers: {
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify( {
                user: {
                    name: this.state.name,
                    age: this.state.age,
                    password: this.state.password,
                    password_confirmation: this.state.password
                }
            })
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error("Bad network response.");
        })
        .then(response => {
            localStorage.setItem('userID', response.id);
            localStorage.setItem('user', response.name);
            this.props.history.push({
                pathname: "/careercard",
                state: {
                    name: response.name,
                    id: response.id,
                    password: response.password
                }
            })
        })
        .catch(error => console.log(error.message));
    }

  /*  changeHeaderBack(){
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

    inputChange(event){
        let input = event;
        switch (this.state.header) {
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

    render()  {
        return(
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row">
                            <div className="col-12">
                                {this.changeHeader(this.state.header)}
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        );

    }
}