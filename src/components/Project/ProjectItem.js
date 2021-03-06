import React,{Component} from 'react';
import {Link,} from 'react-router-dom'
import { deleteProject } from '../../redux/ActionCreaters';
import {connect} from 'react-redux'


class ProjectItem extends Component{


    handleDelete=()=>{
            this.props.deleteProject(this.props.project.projectIdentifier)
    }

    render(){

  
  


        return(
            <div className="container">
                   <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2">
                        <span className="mx-auto"><h2>{this.props.project.projectName}</h2></span>
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3> <p>{this.props.project.projectDescription}</p></h3>
                       
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <ul className="list-group">
                            <a href="#">
                                <li className="list-group-item board">
                                    <i className="fa fa-flag-checkered pr-1">Project Board </i>
                                </li>
                            </a>
                            <Link to={`/updateProject/${this.props.project.projectIdentifier}`}>
                                <li className="list-group-item update">
                                    <i className="fa fa-edit pr-1">Update Project Info</i>
                                </li>
                            </Link>
                            <a href="">
                                <li className="list-group-item delete" onClick={this.handleDelete}>
                                    <i className="fa fa-minus-circle pr-1">Delete Project</i>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>     

                         
                          

                       
                    </div>
        )
    }

}

export default connect(null,{deleteProject})(ProjectItem);