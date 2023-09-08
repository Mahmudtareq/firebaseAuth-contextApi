import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <>
      <Navbar />
      <Toaster />
      <Outlet />
    </>
  );
};

export default Main;
