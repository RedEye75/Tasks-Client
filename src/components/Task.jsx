import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
  const { image, status, description, title } = task;
  return (
    <div className="">
      <Card className="w-96">
        <CardHeader color="blue" className="relative h-56">
          <img src={image} alt="img-blur-shadow" className="h-full w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardBody>
        <div className="mx-auto">
          <td className="px-6 py-4 space-y-3 items-center text-sm font-medium">
            <Link className="hover:rounded-2xl mt-3  mr-2 btn bg-green-900 text-white">
              Update
            </Link>
            <Link className="hover:rounded-2xl   mr-2 btn bg-red-900 text-white">
              Delete
            </Link>
            <Link className="hover:rounded-2xl btn bg-blue-900 text-white">
              Completed
            </Link>
          </td>
        </div>
      </Card>
    </div>
  );
};

export default Task;
