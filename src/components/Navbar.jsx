import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to={"/addTask"} className="p-1 text-black font-bold">
        Add Task
      </Link>
      <Link to={"/myTasks"} className="p-1 text-black font-bold">
        My Task
      </Link>
      <Link to={"/completedTasks"} className="p-1 text-black font-bold">
        Completed Task
      </Link>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl bg-cyan-900  rounded-md shadow-lg py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link className="mr-4 cursor-pointer py-1.5 font-normal">
          <span className="text-3xl font-bold font-serif bg-gradient-to-r from-pink-300 via-purple-500 to-violet-600 bg-clip-text   text-transparent sm:text-5xl">
            AceToDo
          </span>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div>
          <Link>
            <Button className="hidden mr-3 lg:inline-block">Sign In</Button>
          </Link>
          <Link>
            <Button className="hidden btn btn-success lg:inline-block">
              Sign Up
            </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
