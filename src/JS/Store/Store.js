import  {createStore} from "redux";
import { ReducersTask} from "../reducers/ReducersTask";



const store=createStore (ReducersTask,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  export default store;
