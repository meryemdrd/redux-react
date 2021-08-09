import React, { useState } from "react";
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { addTask, toggle } from "../JS/Action/action";


const AddTask = () => {
const [text, setText] = useState("");
const dispatch = useDispatch();
const filtred = useSelector((state) => state.filtred);
const handelChange= (e) => { e.preventDefault();
   
  if (text.trim()) {
    dispatch(addTask({ text: text, id: Math.random , isDone: false}));
    setText("");
   }
  
   else {alert ("can't add an  empty task" )}
    
  };

  return (
    <>
      <Card bg="secondary">
      <Card.Body>
        <h1 className={"text-white"}> List tasks </h1>

        <Form onSubmit={handelChange}>
          <Form.Group>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <InputGroup.Append>
                <Button variant="warning" onClick={handelChange}>
                  ADD a  Task
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        <Button
          variant="success"
          className="mr-3"
          onClick={() => dispatch(toggle())}
        >
          {filtred ? "ALL" : "close"}
        </Button>
      </Card.Body>
    </Card>
    </>
  );
};
    
 
export default AddTask
