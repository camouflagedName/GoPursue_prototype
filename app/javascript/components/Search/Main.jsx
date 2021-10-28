import React from 'react';
import { API_ROOT } from '../../packs/apiRoot';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Bookmarks from './Bookmarks';
import Search from './Search';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'search',
            searchClass: 'fw-bold shadow',
            bookmarkClass: '',
            careerMatch: props.location.state ? props.location.state.career : [],
            searchTerm: props.location.state ? props.location.state.term : ''
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
                <div className="row vh-100">
                    <div className="card border-0">
                        <div className="row my-2">
                            <div className='col-5 m-0 p-0 text-end'>
                                <button onClick={this.changeToSearch} className={`btn btn-link text-decoration-none link-dark ${this.state.searchClass}`} ><h3 className="text-center">Search</h3></button>
                            </div>
                            <div className='col-2 m-0 p-0 text-center'>
                            <button className="btn btn-link text-decoration-none link-dark" ><h3 className="text-center">|</h3></button>    
                            </div>
                            <div className='col-5 m-0 p-0 text-start'>
                                <button onClick={this.changeToBookmark} className={`btn btn-link text-decoration-none link-dark ${this.state.bookmarkClass}`}><h3 className="text-center">Bookmarks</h3></button>   
                            </div>               
                        </div>
                        { this.state.title === 'bookmark' ? <Bookmarks /> : <Search search={this.state.careerMatch} term={this.state.searchTerm} history={this.props.history}/> } 
                        <Footer />
                    </div>
                </div>
            </>    
        );
    }
}

