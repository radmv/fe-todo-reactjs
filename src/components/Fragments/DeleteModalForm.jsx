import { deleteTodo } from "../../services/todo.service";
import { Button } from "../Elements";

const DeleteModalForm = (props) => {
  const { setIsOpen, data } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    deleteTodo(data, localStorage.getItem("token"), (status) => {
      if (status) {
        setIsOpen(false);
        window.location.reload();
      }
    });
    setIsOpen(false);
  };

  const handleCancelDelete = () => {
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button
        variant="bg-color-bg text-white border border-color-outline w-full"
        type="submit"
      >
        Yes
      </Button>
      <Button
        variant="bg-white text-color-black w-full"
        type="button"
        onClick={handleCancelDelete}
      >
        No
      </Button>
    </form>
  );
};

export default DeleteModalForm;
