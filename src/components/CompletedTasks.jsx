import React from "react";
import { Link } from "react-router-dom";

const CompletedTasks = () => {
  return (
    <div className="">
      <h2 id="task-info" className="font-bold text-3xl mt-32 text-blue-800">
        Completed Task
      </h2>
      <div className="lg:grid grid-cols-2 block mt-14 ">
        <div>
          <img
            className="w-96 mx-auto"
            src="https://img.freepik.com/free-vector/completed-concept-illustration_114360-3891.jpg?w=740&t=st=1672141896~exp=1672142496~hmac=42e69fa832f3d6d187a9b1c3f85ad0f4b8d7dbe3fea4594c97ab1b2138ab86e6"
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-900 ">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3  text-xs  text-black font-bold  uppercase"
                >
                  Task
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-900 dark:divide-gray-900">
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <div>
                  <td className="px-6 py-4 text-start   text-sm font-medium text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam dignissimos blanditiis quidem facere aliquam rerum,
                    inventore ipsum officiis dolorem quibusdam fuga. Iste, nemo
                    animi? Facere natus dolore amet, voluptas enim modi unde
                    magni perferendis temporibus et incidunt voluptate id earum
                    neque saepe. Aspernatur quisquam nemo dignissimos officiis
                    consectetur illum fugit nam. Omnis dicta accusamus itaque
                    temporibus magnam officiis fugit quos delectus molestias,
                    qui maiores accusantium, neque eos quaerat cumque. Quam
                    commodi a doloribus eligendi perferendis magni, beatae,
                    doloremque animi dolor eveniet assumenda consequuntur quo
                    nulla! Ipsa non ab nam porro nostrum nesciunt debitis,
                    consequuntur similique, numquam officiis voluptates minus
                    alias.
                  </td>
                </div>

                <div className="mx-auto">
                  <td className="px-6 py-4 space-y-3 items-center text-sm font-medium">
                    <Link className="hover:rounded-2xl mt-3  mr-2 btn bg-red-900 text-white">
                      Delete
                    </Link>
                    <Link className="hover:rounded-2xl btn bg-blue-900 text-white">
                      Not Completed
                    </Link>
                  </td>
                </div>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <div>
                  <td className="px-6 py-4 text-start   text-sm font-medium text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam dignissimos blanditiis quidem facere aliquam rerum,
                    inventore ipsum officiis dolorem quibusdam fuga. Iste, nemo
                    animi? Facere natus dolore amet, voluptas enim modi unde
                    magni perferendis temporibus et incidunt voluptate id earum
                    neque saepe. Aspernatur quisquam nemo dignissimos officiis
                    consectetur illum fugit nam. Omnis dicta accusamus itaque
                    temporibus magnam officiis fugit quos delectus molestias,
                    qui maiores accusantium, neque eos quaerat cumque. Quam
                    commodi a doloribus eligendi perferendis magni, beatae,
                    doloremque animi dolor eveniet assumenda consequuntur quo
                    nulla! Ipsa non ab nam porro nostrum nesciunt debitis,
                    consequuntur similique, numquam officiis voluptates minus
                    alias.
                  </td>
                </div>

                <div className="mx-auto">
                  <td className="px-6 py-4 space-y-3 items-center text-sm font-medium">
                    <Link className="hover:rounded-2xl mt-3   mr-2 btn bg-red-900 text-white">
                      Delete
                    </Link>
                    <Link className="hover:rounded-2xl btn bg-blue-900 text-white">
                      Not Completed
                    </Link>
                  </td>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompletedTasks;
