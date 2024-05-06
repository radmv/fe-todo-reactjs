import { useState } from "react";
import { addTodo } from "../../services/todo.service";
import { Button, InputForm } from "../Elements";

const AddModalForm = (props) => {
  const { token } = props;

  const [addTodoData, setAddTodoData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: addTodoData,
    };

    addTodo(data, token, (status) => {
      if (status) {
        window.location.reload();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Todo"
        type="text"
        placeholder="input todo.."
        name="todo"
        onChange={(e) => setAddTodoData(e.target.value)}
      />
      <Button variant="bg-white text-color-black w-full" type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddModalForm;
