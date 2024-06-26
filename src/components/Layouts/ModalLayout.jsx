const ModalLayout = (props) => {
  const { children, isOpen, setIsOpen, title } = props;

  // Fungsi untuk membuka modal
  const closeModal = () => {
    setIsOpen(close);
  };

  return (
    <div className="max-h-screen overflow-hidden max-w-screen">
      <div
        className={`${
          isOpen ? "z-[999] block" : "-z-10 hidden"
        } flex flex-row items-center justify-center h-full w-full overflow-hidden bg-black/80 absolute top-0 left-0 right-0 bottom-0 overflow-x-hidden`}
      >
        <div
          id="crud-modal"
          tabIndex="-1"
          className={`${
            isOpen ? "block" : "hidden"
          } overflow-y-auto overflow-x-hidden justify-center items-center md:inset-0 h-[calc(100%-1rem)]`}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } relative w-full max-w-md max-h-full p-4`}
          >
            <div className="relative rounded-lg shadow bg-color-bg dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal} // Panggil fungsi untuk menutup modal
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
