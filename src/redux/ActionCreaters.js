import axios from 'axios';
import * as ActionTypes from './ActionTypes';


export const getProject=()=>dispatch=>{
    return fetch("http://localhost:8080/api/project/all")
    .then(response => {
        if (response.ok) {
            console.log(response)
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response =>{dispatch(addProject(response))
        
    })
    .catch(error => { 
        dispatch(projectError(error.message))
         })
}


export const postProject=(newProject,history)=>(dispatch)=>{
    
    return fetch("http://localhost:8080/api/project", {
        method: 'POST',
        body: JSON.stringify(newProject),
        headers: {
            'Content-Type': 'application/json',
          
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            console.log(response)
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response =>{
        dispatch(addProject(response))
     //   history.push("/home")
        
    }
    )
    .catch(error => { 
        dispatch(projectError(error.message))
         })
}


export const addProject=(project)=>({
    type:ActionTypes.ADD_PROJECT,
    payload:project
})

export const projectError=(message)=>({
    type:ActionTypes.ADD_PROJECT_ERROR,
    payload:message
})



export const updateProject=(newProject,history)=>(dispatch)=>{
    
    return fetch(`http://localhost:8080/api/project/${newProject.projectIdentifier}`, {
        method: 'PUT',
        body: JSON.stringify(newProject),
        headers: {
            'Content-Type': 'application/json',
          
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            console.log(response)
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response =>{
        dispatch(addProject(response))
     //   history.push("/home")
        
    }
    )
    .catch(error => { 
        dispatch(projectError(error.message))
         })
}


export const getProjectById=(projectId)=>dispatch=>{

    return fetch(`http://localhost:8080/api/project/${projectId}`)
    .then(response => {
        if (response.ok) {
            console.log(response)
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response =>{

        console.log("getproject"+response)
        dispatch(addOneProject(response))
        
    })
    .catch(error => { 
        dispatch(projectError(error.message))
         })

}

export const addOneProject=(project)=>({
    type:ActionTypes.ADD_ONE_PROJECT,
    payload:project

})


export const deleteProject=(id)=>dispatch=>{
    return fetch(`http://localhost:8080/api/project/${id}`, {
        method: 'DELETE',
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            console.log(response)
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
  
    .then(id =>{
        dispatch(deleteOneProject(id))
     //   history.push("/home")
        
    }
    )
    .catch(error => { 
        dispatch(projectError(error.message))
         })
}

export const deleteOneProject=(id)=>({
    type:ActionTypes.DELETE_PROJECT,
    payload:id
})