import React,{Component} from 'react';
import ProjectItem from './Project/ProjectItem';
import {Button} from 'reactstrap';
import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProject } from '../redux/ActionCreaters';
const mapStateToProps=(state)=>{
return{
    project:state.project
}
}

class Dashboard extends Component{

    componentDidMount(){
 
        this.props.getProject()
    
    }

 
    

    handleClick=(event)=>{
       
        this.props.history.push("/addproject");
    }

    render(){

        const displayProjects=this.props.project.projects.map((project)=>{
            return(
                <ProjectItem project={project}/>
            )
        })
        return(
            <div className='container'>
                <br/>
                <h2 className='project-name'>Projects</h2>
                <br/>
                <Button color="success" onClick={this.handleClick}>Create a New Project</Button>
                <br/>
                <br/>
                
                 {displayProjects}
            </div>
        )
    }

}

export default connect(mapStateToProps,{getProject})(Dashboard);