import { Input, Textarea } from "@material-tailwind/react";
import React, { useState } from "react";
// import { Input } from "@material-tailwind/react";
const AddTask = () => {
  // const [task, setTask] = useState({});
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const photo = form.image.files[0];
    const formData = new FormData();
    formData.append("image", photo);
    const uri = `"https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(uri, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => console.log("hello"));

    const taskTitle = form.title.value;
    const bio = form.description.value;

    console.log(bio, photo, taskTitle);

    const Task = {
      image: photo,
      title: taskTitle,
      description: bio,
    };

    fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Task),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h2 id="task-info" className="font-bold text-3xl mt-32 text-blue-800">
        Create a task
      </h2>

      <div className="mt-14 lg:flex justify-around block">
        <div>
          <img
            className="h-96 mx-auto"
            src="https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4765.jpg?w=740&t=st=1672141988~exp=1672142588~hmac=3eb68d34a1102ca09dc8f43836b9cf1dbefb130e497af15c4206eb49820aa8e0"
            alt=""
          />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="w-96 mt-14  space-y-3 mx-auto">
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
                required
              />
            </label>
            <Input name="title" label="Task title" required />
            <Textarea name="description" label="Task description" required />
          </div>
          <input
            className="mx-auto inline-flex gap-3 mt-3 items-center rounded border-2 border-[#ff7043] bg-[#ff7043] px-8 py-2 font-bold  text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
            type="submit"
            value="+ Add Task"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
