/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        form.reset();
        toast("User Create Successfully ! Please login ");
        updateUserProfileName(registerUser, name);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const updateUserProfileName = (user, name) => {
    updateUserProfile(user, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card lg:w-[400px] w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className=" text-blue-600 text-start my-3">Please Register</h2>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              {/* <p className="text-red-600 text-start mt-2">{error}</p> */}
            </form>
            <span className="text-base">
              Already have an account please
              <Link
                className=" link link-hover hover:text-red-500  text-purple-500 "
                to="/login"
              >
                {" "}
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
