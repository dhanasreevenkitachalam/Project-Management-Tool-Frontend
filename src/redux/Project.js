import * as ActionTypes from './ActionTypes'

export const Project=(state={
    projects:[],
    errMessage:'',
    isLoading:false,
    project:{}
},action)=>{
  

    switch(action.type){
        case ActionTypes.ADD_PROJECT:{
            return {...state,projects:action.payload,errMessage:null,isLoading:false,project:{}}

        }

        case ActionTypes.ADD_PROJECT_ERROR:{
            return {...state,projects:[],errMessage:action.payload,isLoading:false,project:{}}
        }

        case ActionTypes.ADD_ONE_PROJECT:{
            console.log(action.payload+"inside redu")
            return {...state,projects:[],errMessage:null,isLoading:false,project:action.payload}
        }

        default: return state;
    }


}