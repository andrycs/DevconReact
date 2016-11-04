import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/index';
import { Link } from 'react-router';

class ProjectIndex extends Component {

    componentWillMount() {
        this.props.fetchProjects();
    }

    renderProjects() {
        // console.log(this.props.projects);
        return this.props.projects.map((project) => {
            return (
                <div key={project.id}>
                    <strong>{project.name}</strong>
                </div>
            );   
        });
    }

    render() {
        return (
            <div>
                {this.renderProjects()}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { projects: state.projects.all };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectIndex);