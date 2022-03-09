import React from 'react';
import Bookmarks from './Bookmarks';
import Search from './Search';

export default class MainSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'search',
            searchClass: 'fw-bold shadow',
            bookmarkClass: '',
            careerMatch: this.props.career ? this.props.career : [],
            searchTerm: this.props.term ? this.props.term : '',
        }
        this.changeToBookmark = this.changeToBookmark.bind(this);
        this.changeToSearch = this.changeToSearch.bind(this);
    }

    changeToSearch() {
        this.setState({ title: "search", searchClass: "fw-bold shadow", bookmarkClass: '' });
    }

    changeToBookmark() {
        this.setState({ title: "bookmark", searchClass: '', bookmarkClass: "fw-bold shadow" });
    }

    render() {
        return (
            <>
                <div className="row my-2">
                    <div className='col-5 m-0 p-0 text-end'>
                        <button onClick={this.changeToSearch} className={`btn btn-link text-decoration-none link-dark ${this.state.searchClass}`} ><h3 className="text-center" style={{color: `${this.props.style.textColor}`}}>Search</h3></button>
                    </div>
                    <div className='col-2 m-0 p-0 text-center'>
                        <button className="btn btn-link text-decoration-none link-dark" ><h3 className="text-center">|</h3></button>
                    </div>
                    <div className='col-5 m-0 p-0 text-start'>
                        <button onClick={this.changeToBookmark} className={`btn btn-link text-decoration-none link-dark ${this.state.bookmarkClass}`}><h3 className="text-center" style={{color: `${this.props.style.textColor}`}}>Bookmarks</h3></button>
                    </div>
                </div>
                {this.state.title === 'bookmark' ? <Bookmarks screen={this.props.screen} userData={this.props.userData} style={this.props.style}/> : <Search search={this.state.careerMatch} term={this.state.searchTerm} screen={this.props.screen} userData={this.props.userData} style={this.props.style} />}
            </>
        );
    }
}

