import { useContext } from "react";
import { UiContext } from "../store/uiCtx";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const uiCtx = useContext(UiContext);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              ></img>
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              ></img>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  onClick={() => navigate("/home")}
                  className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Patients
                </a>
                <a
                  onClick={() => navigate("/myPatients")}
                  className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  My Patients
                </a>
                <a
                  onClick={() => navigate("/addNew")}
                  className="text-gray-300 cursor-pointer flex justify-center items-center hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <span className="material-symbols-outlined">add</span>
                  <span>Add New</span>
                </a>
                <a
                  onClick={() => navigate("/howto")}
                  className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Guidelines
                </a>
                <a
                  onClick={() => navigate("/about")}
                  className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <span className="material-symbols-outlined">
                notifications_active
              </span>
            </button>

            <div className="relative ml-3">
              <div>
                <button
                  onClick={() => uiCtx.toggleProfile()}
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="text-white flex items-center gap-2">
                    {user.username}{" "}
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </div>
                </button>
              </div>
              <div
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/");
                }}
                className={`absolute ${
                  uiCtx.showProfile ? "" : "hidden"
                } right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            onClick={() => navigate("/home")}
            className="bg-gray-900 cursor-pointer text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Patients
          </a>
          <a
            onClick={() => navigate("/myPatients")}
            className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            My Patients
          </a>
          <a
            onClick={() => navigate("/addNew")}
            className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Add New
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
