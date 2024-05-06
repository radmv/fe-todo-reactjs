import { useEffect, useState } from "react";
import {
  AddModalForm,
  BottomButton,
  Card,
  ModalLayout,
} from "../../components";
import { getUserTodo } from "../../services/todo.service";
import Dashnavbar from "./Navbar";

const DashboardPage = () => {
  const [user, setUser] = useState({});
  const [todoData, setTodoData] = useState([]);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);

  useEffect(() => {
    getUserTodo(localStorage.getItem("token"), (status, res) => {
      if (status) {
        setTodoData(res);
      }
    });
  }, []);

  useEffect(() => {
    const userData = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      avatar: localStorage.getItem("avatar"),
    };
    setUser(userData);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      window.location.replace("/");
    }
  }, [user]);

  return (
    <>
      <Dashnavbar setAddModalIsOpen={setAddModalIsOpen} user={user} />

      {/* mobile add button */}
      <BottomButton onClick={() => setAddModalIsOpen(true)}>
        Add Todo
      </BottomButton>

      {/* content */}
      <div className="flex flex-col items-center max-w-2xl mx-auto mt-24 gap-y-4">
        {todoData.data?.map((todo, index) => (
          <Card key={index} data={todo} />
        ))}
      </div>

      {/* modals */}
      {/* add modal */}
      <ModalLayout
        title="Add New Todo"
        isOpen={addModalIsOpen}
        setIsOpen={setAddModalIsOpen}
      >
        <AddModalForm token={localStorage.getItem("token")} />
      </ModalLayout>
    </>
  );
};

export default DashboardPage;
