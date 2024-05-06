import { useState } from "react";
import { Button } from "../../components";
import { logout } from "../../services/auth.service";

const Dashnavbar = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setAddModalIsOpen, user } = props;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openAddModal = (event) => {
    event.preventDefault();
    setAddModalIsOpen(true);
  };

  const handleLogout = () => {
    logout();
    window.location.replace("/");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto text-white bg-color-black">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Todo App
            </span>
          </a>
          <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen ? "true" : "false"}
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={user.avatar}
                alt="user photo"
              />
            </button>
            <div
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } absolute right-4 top-5 lg:right-80 mt-10 lg:top-10 text-base list-none bg-color-bg divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-white">{user.name}</span>
                <span className="block text-sm truncate text-color-text-input">
                  {user.email}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <span
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <Button
              type="button"
              variant="flex flex-row items-center gap-2 bg-color-black text-white border border-color-outline"
              onClick={openAddModal}
            >
              Add Todo{" "}
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Dashnavbar;
