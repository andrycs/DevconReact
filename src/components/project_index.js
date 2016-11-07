import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/index';
import { Link } from 'react-router';

class ProjectIndex extends Component {

    componentWillMount() {
        this.props.fetchProjects();
    }

    renderProjects() {

        if (!this.props.projects) {
            return (
                <div className="text-center"><img src="http://s.kaskus.id/images/smilies/smilies_fb5ly1i58kbq.gif" /></div>
            );
        } 

        // console.log(this.props.projects);
        return this.props.projects.map((project) => {
            return (
                <Link key={project.id} to={"projects/" + project.id}>
                    <li className="list-group-item" >
                        <strong>{project.name}</strong>
                        <span className="pull-right">Owner: {project.user_id}</span>    
                    </li>
                </Link>
            );   
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/projects/search" className="btn btn-primary pull-right"> 
                        Search Project
                    </Link>
                </div>
                <h3>Projects</h3>
                <ul className="list-group">
                    {this.renderProjects()}
                </ul>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { projects: state.projects.all };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectIndex);