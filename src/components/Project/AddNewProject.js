import React,{Component} from 'react';
import moment from 'moment';
import {Form,Input,FormGroup,Col, Label,Button} from 'reactstrap';

class AddNewProject extends Component{
    constructor(props){
        super(props);

        this.state={
        projectDescription:'',
        projectName:'',
        projectIdentifier:'',
        startDate:moment(new Date()).format('YYYY-MM-DD'),
        endDate:moment(new Date()).format('YYYY-MM-DD') 
      }
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
            projectIdentifier:this.state.projectIdentifier,
            start_date:this.state.startDate,
            end_date:this.state.endDate
        }
       console.log(newProject);
    }

    render(){
        return(
            <div className='container'>
                <h2 className='project-name'>ADD NEW PROJECT</h2>
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
                                <Input type="text" name="projectIdentifier" id="projectIdentifier" 
                                value={this.state.projectIdentifier}
                                onChange={this.handleChange}/>

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
                                value={this.state.startDate}
                                onChange={this.handleChange} />

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlFor="endDate">
                                <b>End Date</b></Label>
                            <Col md={8}>
                                <Input type="date" name="endDate" id="endDate" 
                                value={this.state.endDate}
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

export default AddNewProject;