import React from 'react';
import { Link } from 'react-router-dom';

export default class NewUser extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            header: 'My preferred name is',
            input: '',
            name: '',
            age: ''
        };
        this.changeHeader = this.changeHeader.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    changeHeader(){
        switch (this.state.header) {
            case 'My preferred name is':
                this.setState({ header: 'My age is', input: '' });
                break;
            case 'My age is':
                this.setState({ header: 'I am interested in', input: ''});
                break;
            case 'I am interested in':
                this.setState({ input: ''});
                alert('Age: ' + this.state.age + ' | Name: ' + this.state.name);
        }
    }

    inputChange(event){
        let input = event.target.value;
        switch (this.state.header) {
            case 'My preferred name is':
                this.setState({ name: input, input: input });
                break;
            case 'My age is':
                this.setState({ age: input, input: input });
                break;
            case 'I am interested in':
        }
    }


    render()  {
        return(
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row">
                            <div className="col-12">
                                <h1 className='display-4 mb-4'>{this.state.header}</h1>
                                <form className='needs-validation' novalidate>
                                    <input className='mb-4 form-control' type="text" id="newUser" value={this.state.input} onChange={this.inputChange} required></input>
                                    <div className='invalid-feedback'>
                                        Input required.
                                    </div>
                                </form>
                            </div>
                        </div>
                            <button type='button' className='btn btn-lg btn-success' onClick={this.changeHeader}>Next</button>
                    </div>
                </div>
            </div>
        );

    }
}
