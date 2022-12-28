import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="min-h-screen">
      <h3 id="task-info" className="font-bold text-3xl mt-32 text-blue-800">
        Register
      </h3>
      <div className=" block lg:flex mt-14 justify-evenly">
        <div>
          <img
            className="w-96 mx-auto "
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
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-black rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                    required
                  />
                </div>

                <div className="w-full mt-4">
                  <input
                    class="block w-full border-black px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    required
                  />
                </div>
                <div class="w-full mt-4">
                  <input
                    class="block w-full border-black px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    required
                  />
                </div>

                <div className="w-full mt-4">
                  <label
                    class="flex w-full cursor-pointer appearance-none justify-center rounded-md  border border-black bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    tabindex="0"
                  >
                    <span
                      for="photo-dropbox"
                      class="flex items-center space-x-2"
                    >
                      <svg
                        class="h-6 w-6 stroke-gray-400"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M96 208H72A56 56 0 0172 96a57.5 57.5.0 0113.9 1.7"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        ></path>
                        <path
                          d="M80 128a80 80 0 11144 48"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        ></path>
                        <polyline
                          points="118.1 161.9 152 128 185.9 161.9"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        ></polyline>
                        <line
                          x1="152"
                          y1="208"
                          x2="152"
                          y2="128"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        ></line>
                      </svg>
                      <span class="text-xs font-medium text-gray-600">
                        Drop files to Attach, or
                        <span class="text-blue-600 underline"> browse</span>
                      </span>
                    </span>
                    <input
                      id="photo-dropbox"
                      type="file"
                      class="sr-only"
                      required
                    />
                  </label>
                </div>

                <input
                  className="mx-auto inline-flex gap-3 mt-4 items-center rounded-md border-2 border-[#1b5e20] bg-[#1b5e20] px-8 py-2 font-bold  text-white  active:opacity-75"
                  type="submit"
                  value="Sign Up"
                />
              </form>
              <div class="flex items-center justify-between ">
                <span class="w-1/5 border-b border-gray-900 dark:border-gray-900 lg:w-2/4"></span>

                <Link class="text-xs text-center text-gray-900  font-bold m-5 uppercase dark:text-gray-400 hover:underline">
                  or
                </Link>

                <span class="w-3/5 border-b border-gray-900 dark:border-gray-900 lg:w-2/4"></span>
              </div>
              <div>
                <button
                  type="submit"
                  class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <div class="flex items-center justify-center">
                    <FcGoogle className="text-3xl" />
                    <span id="btn-txt" class="ml-4">
                      Continue with Google
                    </span>
                  </div>
                </button>
              </div>
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
