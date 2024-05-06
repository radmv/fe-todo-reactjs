import { editTodo } from "../../services/todo.service";
import { Button, InputForm, Select } from "../Elements";

const EditModalForm = (props) => {
  const { setIsOpen, data } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      id: data.id,
      name: e.target.name.value,
      status: e.target.status.value,
    };

    editTodo(updatedData, localStorage.getItem("token"), (status, res) => {
      if (status) {
        setIsOpen(false);
        window.location.reload();
      } else {
        console.log(res);
      }
    });
  };

  const handleCancelEdit = () => {
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Todo Name"
        type="text"
        name="name"
        defaultValue={data.name}
      />
      <Select title="Status" name="status" defaultValue={data.status} />
      <Button variant="bg-white text-color-black w-full" type="submit">
        Save
      </Button>
      <Button
        variant="bg-color-bg text-white border border-color-outline w-full"
        type="button"
        onClick={handleCancelEdit}
      >
        Cancel
      </Button>
    </form>
  );
};

export default EditModalForm;
