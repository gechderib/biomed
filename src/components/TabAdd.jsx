import { useContext } from "react";
import { UiContext } from "../store/uiCtx";

const TabAdd = () => {
    const uiCtx = useContext(UiContext)
  return (
    <div className="">
      <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
        <ul
          className="flex flex-wrap -mb-px"
        >
          <li className="mr-2" role="presentation">
            <button
            onClick={()=>uiCtx.setIsAddingDoc(false)}
              className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Add New Patient
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
            onClick={()=>uiCtx.setIsAddingDoc(true)}

              className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active"
            >
              Add New Doctor
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  //   <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
};

export default TabAdd;
