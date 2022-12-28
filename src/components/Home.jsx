import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              data-aos="fade-right"
              data-aos-duration="3000"
              class="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/free-vector/scrum-board-concept-illustration_114360-1570.jpg?w=1060&t=st=1672163052~exp=1672163652~hmac=4a53fd7dcc5b7c5db0dd4869622753bf49cb962fee06c1aeb9d7d069933e40fd"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2  lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1
              data-aos="fade-down"
              data-aos-duration="3000"
              id="bio"
              class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent mb-5 sm:text-5xl"
            >
              AceToDo brings all your tasks and tools in combination
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="3000"
              id="slogan"
              class="mb-8 font-bold  text-xl text-black"
            >
              This is a simple task manager that makes it easy for you to keep
              track all of your tasks.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              class="flex justify-center"
            >
              <Link to={"/addTask"}>
                <button
                  type="button"
                  className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase xt-links-inverse bg-[#bf360c] text-white bg-primary-500 border-transparent border transition  hover:bg-[#bf360c] hover:border-[#bf360c] hover:-translate-y-2 hover:shadow-lg active:text-white active:bg-primary-700 active:translate-y-0 active:shadow-md on:text-white on:bg-primary-700 on:translate-y-0 on:shadow-md"
                >
                  Get Started
                </button>
              </Link>
              <Link to={"/blogs"}>
                <button
                  type="button"
                  className="xt-button py-2.5 ml-5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase xt-links-inverse bg-[#1a237e] text-white bg-primary-500 border-transparent border transition  hover:bg-[##1a237e] hover:border-[##1a237e] hover:-translate-y-2 hover:shadow-lg active:text-white active:bg-primary-700 active:translate-y-0 active:shadow-md on:text-white on:bg-primary-700 on:translate-y-0 on:shadow-md"
                >
                  Blogs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
