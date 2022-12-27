import { Input, Textarea } from "@material-tailwind/react";
import React from "react";
// import { Input } from "@material-tailwind/react";
const AddTask = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.image.files[0];

    const taskTitle = form.title.value;
    const bio = form.description.value;
    console.log(bio, photo, taskTitle);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2 className="font-bold text-3xl text-blue-800">Create a new task</h2>
        <div className="w-96 mt-10 space-y-3 mx-auto">
          <label
            className="flex w-full cursor-pointer appearance-none justify-center rounded-lg border  border-gray-400 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
            tabIndex="0"
          >
            <span
              htmlFor="photo-dropbox"
              className="flex items-center space-x-2"
            >
              <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                <path
                  d="M96 208H72A56 56 0 0172 96a57.5 57.5.0 0113.9 1.7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></path>
                <path
                  d="M80 128a80 80 0 11144 48"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></path>
                <polyline
                  points="118.1 161.9 152 128 185.9 161.9"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></polyline>
                <line
                  x1="152"
                  y1="208"
                  x2="152"
                  y2="128"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
              </svg>
              <span className="text-xs font-medium text-gray-600">
                Drop files to Attach, or
                <span className="text-blue-600 underline"> browse</span>
              </span>
            </span>
            <input
              id="photo-dropbox"
              type="file"
              name="image"
              className="sr-only"
            />
          </label>
          <Input name="title" label="Task title" />
          <Textarea name="description" label="Task description" />
        </div>
        <input
          className="mx-auto inline-flex gap-3 items-center rounded-full border-2 border-blue-500 bg-blue-500 px-8 py-3 font-bold  text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddTask;
