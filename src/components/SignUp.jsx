import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen">
      <h3 id="task-info" className="font-bold text-3xl mt-32 text-blue-800">
        Register
      </h3>
      <div className=" block lg:flex mt-14 justify-evenly">
        <div>
          <img
            className="w-96 mx-auto h-full"
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7895.jpg?w=2000"
            alt=""
          />
        </div>
        <div>
          <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="px-6 py-4">
              <h2
                id="company"
                class="text-3xl font-bold text-center text-cyan-900 dark:text-white"
              >
                AceToDo
              </h2>

              <h3
                id="slogan"
                class="mt-1 text-xl font-medium text-center text-[#db5c35] dark:text-gray-200"
              >
                Join With Us
              </h3>

              <form>
                <div class="w-full mt-4">
                  <input
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                </div>

                <div class="w-full mt-4">
                  <input
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </div>

                <input
                  className="mx-auto inline-flex gap-3 mt-4 items-center rounded-md border-2 border-[#1b5e20] bg-[#1b5e20] px-8 py-2 font-bold  text-white  active:opacity-75"
                  type="submit"
                  value="Sign Up"
                />
              </form>
            </div>

            <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
              <span class="text-sm text-gray-600 dark:text-gray-200">
                Already have an account?
              </span>

              <Link
                to={"/signIn"}
                class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
