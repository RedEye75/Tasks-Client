import React from "react";
import { Link } from "react-router-dom";

const MyTasks = () => {
  return (
    <div>
      <h3>my task</h3>

      <div className="flex mt-10 flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      John Brown
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                      <Link className="hover:rounded-2xl mr-2 btn bg-green-900 text-white">
                        Update
                      </Link>
                      <Link className="hover:rounded-2xl mr-2 btn bg-red-900 text-white">
                        Delete
                      </Link>
                      <Link className="hover:rounded-2xl btn bg-blue-900 text-white">
                        Completed
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
