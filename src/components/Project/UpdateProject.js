import React,{Component} from 'react';
import moment from 'moment';
import {Form,Input,FormGroup,Col, Label,Button} from 'reactstrap';
import {getProjectById,updateProject} from '../../redux/ActionCreaters';
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
    return{
        project:state.project
    }
}


class UpdateProject extends Component{
    constructor(props){
        super(props);

        this.state={
        projectDescription:'',
        projectName:'',
        start_date:'',
        end_date:''
      }
    }

    componentDidMount(){
        this.props.getProjectById(this.props.match.params.projectIdentifier);

    }
    componentWillReceiveProps(nextProps){
        const {
            projectDescription,
            projectName,
            start_date,
            end_date ,

        }=nextProps.project.project;
        
      
        this.setState({
            projectDescription,
            projectName,
            start_date,
            end_date 
        })
   
    }
   

    handleChange=(event)=>{

        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        let newProject={
            projectName:this.state.projectName,
            projectDescription:this.state.projectDescription,
            projectIdentifier:this.props.match.params.projectIdentifier,
            start_date:this.state.startDate,
            end_date:this.state.endDate
        }
      console.log(newProject+"inside update");

     this.props.updateProject(newProject,this.props.history);
  //   this.props.history.push("/home")
    }

    render(){
        return(
            <div className='container'>
                <h2 className='project-name'>UPDATE PROJECT</h2>
                <br/>
                <br/>
                <div className='col-12 col-md-10'>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label md={2} htmlFor="projectName">
                                <b>Project Name:</b></Label>
                            <Col md={8}>
                                <Input type="text" name="projectName" id="projectName" 
                                value={this.state.projectName}
                                onChange={this.handleChange} />

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlFor="projectIdentifier">
                                <b>Identifier:</b></Label>
                            <Col md={8}>
                                
                              <Label>{this.props.match.params.projectIdentifier}</Label>

                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={2} htmlFor='projectDescription'>
                                <b> Description:</b></Label>
                            <Col md={8}>
                                <Input type="textarea" name="projectDescription" id="projectDescription"  rows="5"
                                value={this.state.projectDescription}
                                onChange={this.handleChange} />

                            </Col>
                        </FormGroup>
                       

                        <FormGroup row>
                            <Label md={2} htmlFor="startDate">
                                <b>Start Date</b></Label>
                            <Col md={8}>
                                <Input type="date" name="startDate" id="startDate" 
                                value={this.state.start_date}
                                onChange={this.handleChange} />

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlFor="endDate">
                                <b>End Date</b></Label>
                            <Col md={8}>
                                <Input type="date" name="endDate" id="endDate" 
                                value={this.state.end_date}
                                onChange={this.handleChange} />

                            </Col>
                        </FormGroup>


                        <FormGroup row>
                          
                          <Col md={{offset:5,size:3}}>
                              <Button color="success">Submit</Button>

                          </Col>
                      </FormGroup>

                    </Form>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps,{ getProjectById,updateProject})(UpdateProject);