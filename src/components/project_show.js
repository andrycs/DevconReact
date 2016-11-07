import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchProjectById } from '../actions/index';
import { Link } from 'react-router';

class ProjectShow extends Component {

    componentWillMount() {
        this.props.fetchProjectById(this.props.params.id);
    }

    render () {
        const { project } = this.props;
        // console.log(this.props.project);
        return (
            <div>
                <Link to="/" className="btn btn-warning pull-right"> 
                    back
                </Link>
                <h3>Project #{this.props.params.id}</h3>
                <hr />
                <h3>{project.name}</h3>
                <h6>Owner: {project.user_id}</h6>
                <p>Group Id: {project.group_id}</p>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return { project: state.projects.project };
}

export default connect(mapStateToProps, { fetchProjectById })(ProjectShow);
