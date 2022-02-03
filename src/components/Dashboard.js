import React,{Component} from 'react';
import ProjectItem from './Project/ProjectItem';
import {Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';

class Dashboard extends Component{

    handleClick=()=>{
        console.log("hello");
        this.props.history.push("/addproject");
    }

    render(){
        return(
            <div className='container'>
                <br/>
                <h2 className='project-name'>Projects</h2>
                <br/>
                <Button color="success" onClick={this.handleClick}>Create a New Project</Button>
                <br/>
                <br/>
                <ProjectItem/>
            </div>
        )
    }

}

export default withRouter(Dashboard);