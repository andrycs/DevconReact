import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjectByUserId } from '../actions/index';
import { Link } from 'react-router';

import ProjectIndex from '../components/project_index';

class ProjectSearch extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }


    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchProjectByUserId(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <div>
            <Link to="/" className="btn btn-warning pull-right"> 
                back
            </Link>
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                placeholder="Search project by userid"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
            <ProjectIndex />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

export default connect(null, { fetchProjectByUserId })(ProjectSearch);