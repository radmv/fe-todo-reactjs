import { useState } from "react";
import { DeleteModalForm, EditModalForm } from "../../Fragments";
import { ModalLayout } from "../../Layouts";
import Button from "../Button";

const Card = (props) => {
  const { data } = props;

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  console.log(editModalIsOpen, deleteModalIsOpen);
  return (
    <div className="w-[36rem] p-6 bg-color-black border border-color-outline rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row items-center justify-between">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-color-text-primary">
          {data.name}
        </h5>
        <p className="text-xs font-light text-color-text-input">
          {data.created_diff_human}
        </p>
      </div>
      <span className="text-color-text-input">Status:</span>
      <p className="mb-3 text-sm font-normal text-color-text-input dark:text-slate-400">
        {data.status}
      </p>
      <div className="flex flex-row items-center justify-end">
        <Button
          variant="bg-white text-color-black w-fit"
          onClick={() => setEditModalIsOpen(true)}
        >
          Edit
        </Button>
        <Button
          variant="bg-color-black border border-color-outline text-white w-fit"
          onClick={() => setDeleteModalIsOpen(true)}
        >
          Hapus
        </Button>
      </div>
      {/* modals */}
      <ModalLayout
        title="Edit Todo"
        isOpen={editModalIsOpen}
        setIsOpen={setEditModalIsOpen}
      >
        <EditModalForm setIsOpen={setEditModalIsOpen} data={data} />
      </ModalLayout>
      <ModalLayout
        title="Are you sure to delete this Todo?"
        isOpen={deleteModalIsOpen}
        setIsOpen={setDeleteModalIsOpen}
      >
        <DeleteModalForm setIsOpen={setDeleteModalIsOpen} data={data} />
      </ModalLayout>
    </div>
  );
};

export default Card;
