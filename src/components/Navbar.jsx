import { useState, useEffect, useContext } from "react";
import { FaUser } from "react-icons/fa";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

export default function Example() {
  const { user, logOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to={"/"} className="p-1 text-black font-bold">
        Home
      </Link>

      <Link to={"/addTask"} className="p-1 text-black font-bold">
        Add Task
      </Link>
      <Link to={"/myTasks"} className="p-1 text-black font-bold">
        My Task
      </Link>
      <Link to={"/completedTasks"} className="p-1  text-black font-bold">
        {" "}
        Completed Task
      </Link>
    </ul>
  );

  return (
    <Navbar className="mx-auto   fixed top-0 bg-white  rounded-md shadow-lg py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link
          to={"/"}
          className="mr-4 flex gap-2 cursor-pointer py-1.5 font-normal"
        >
          {/* <FaTasks className="text-3xl mt-1 mr-1 font-bold font-serif " />{" "} */}
          {/* <MdOutlineAddTask className="text-5xl  text-blue-800" /> */}{" "}
          <img
            className="h-10"
            src="https://cdn-icons-png.flaticon.com/128/762/762686.png"
            alt=""
          />
          <span
            id="company"
            className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 font-bold  "
          >
            AceToDo
          </span>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex">
          {user?.photoURL ? (
            <div className="">
              <img
                className="h-10 w-10 rounded-md mr-3 hidden lg:inline-block"
                src={user.photoURL}
                alt=""
              />
              {/* <div class="m-3">
                <h3
                  id="slogan"
                  class="font-semibold text-gray-800 dark:text-white"
                >
                  {user.displayName}
                </h3>
                <p id="bio" class="text-sm font-medium text-gray-900">
                  {user.email}
                </p>
              </div> */}
            </div>
          ) : (
            <FaUser className=" mr-3  rounded-full w-10 h-10" />
          )}
          {user?.uid ? (
            <Link>
              <Button
                onClick={handleLogOut}
                className="hidden mr-3  bg-[#aa1b1b] lg:inline-block"
              >
                Sign Out
              </Button>
            </Link>
          ) : (
            <div>
              <Link to={"/signIn"}>
                <Button className="hidden mr-3 bg-[#e65100] lg:inline-block">
                  Sign In
                </Button>
              </Link>
              <Link to={"/signUp"}>
                <Button className="hidden bg-[#1b5e20] lg:inline-block">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
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
      <MobileNav className="bg-white" open={openNav}>
        {navList}
        <Link to={"/signIn"}>
          <Button fullWidth className="mb-2">
            <span>Sign In</span>
          </Button>
        </Link>
        <Link to={"/signUp"}>
          <Button fullWidth className="mb-2 bg-green-900 ">
            <span>Sign Up</span>
          </Button>
        </Link>
      </MobileNav>
    </Navbar>
  );
}
