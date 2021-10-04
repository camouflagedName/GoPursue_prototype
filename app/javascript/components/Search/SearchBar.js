import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: ''}

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleInput(event) {
        this.setState({ search: event.target.value })
    }

    handleSubmit() {
        this.props.search(this.state.search)
    }

    render() {
        return (
            <form className='d-flex'>
                <div className='input-group'>
                    <input onChange={this.handleInput} className='form-control' type='search' placeholder='enter a keyword' aria-label='Search'/>
                        <button onClick={this.handleSubmit} className='btn btn-outline-secondary' type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
                        </button>
                </div>
            </form>
        )
    }
}