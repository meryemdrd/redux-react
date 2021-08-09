import { ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {checkTask, deleteTask } from '../JS/Action/action';
import Edit from "../components/Edit";
//import Task from "./Task";

const ListTask = () => {
    const ListTask = useSelector((state)=> state.listTasks)
    const filtred = useSelector((state) => state.filtred);
    const dispatch = useDispatch();

return (

<ListGroup>
      {(filtred ? ListTask.filter((el) => el.isDone === true) : ListTask).map(
        (task, key) => (
          <ListGroup.Item
            key={key}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <section
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
                width: "25%",
              }}
            >
              <Button
                variant="outline-primary"
                onClick={() => dispatch(checkTask(task))}
              >
                {task.isDone ? "Is Done" : "Not Done"}
              </Button>
              <Edit task={task} /> 
              <Button
                variant="danger"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete Task
              </Button>
            </section>
            <div style={{ margin: "0px" , lineHeight:"38px",  color: "blue" }} className={task.isDone ? "check" : ""}>
              {task.text}
            </div>
          </ListGroup.Item>
        )
      )}
    </ListGroup>
  );
};

   


export default ListTask