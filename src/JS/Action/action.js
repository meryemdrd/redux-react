import { ADD_TASK, DELETE_TASK, CHECK_TASK, EDIT_TASK, TOGGLE  } from "../constant/action-types.js";

    export const addTask=(newtask)=>{
        return {
            type: ADD_TASK,
            payload: newtask,
        }
    };   
    export const editTask = (id, text) => {
        return {
          type: EDIT_TASK,
     id, text,
        };
      }; 
      
    export const deleteTask = (id) => {
        return {
          type: DELETE_TASK,
          id,
        };
      };
      
      export const checkTask = (payload) => {
        return {
          type: CHECK_TASK,
          payload,
        };
      };
      export const toggle = () => {
        return {
          type: TOGGLE,
        };
      };