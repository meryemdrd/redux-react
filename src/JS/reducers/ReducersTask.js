import { ADD_TASK, DELETE_TASK, CHECK_TASK, EDIT_TASK, TOGGLE } from "../constant/action-types.js";


const initialState= {
    listTasks:[ {id:1,
                text:"hello",
                isDone : false}],
    filtred: false,
};
 export const ReducersTask = (state= initialState, payload) => {
     switch (payload.type) {

        case ADD_TASK :   
             return {...state, listTasks:[...state.listTasks, payload.payload ] }
        
        case EDIT_TASK:
            return {...state, listTasks: state.listTasks.map((el) =>
                el.id === payload.id ? { ...el, text: payload.text} : el
              ),
            }; 
         
        case DELETE_TASK:
            return { ...state, listTasks: state.listTasks.filter((task) => task.id !== payload.id),
            };
      
        case CHECK_TASK:
            return {...state, listTasks: state.listTasks.map((el) =>
                el.id === payload.payload.id ? { ...el, isDone: !el.isDone } : el
              ),
            };
        
            case TOGGLE:
                return {...state, filtred: !state.filtred, };    
    
        
         default : return state 
            
     }
 }
