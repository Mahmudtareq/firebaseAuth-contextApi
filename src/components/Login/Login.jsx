/* eslint-disable no-unused-vars */
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        form.reset();
        toast("User LoginSuccessfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        toast("User LoginSuccessfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card lg:w-[400px] w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className=" text-blue-600 text-start my-3">Please Login</h2>
            <form onSubmit={handleLogin}>
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
                  // ref={emailRef}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <div className="flex items-center justify-between">
                  <label className="label">
                    <a
                      href="#"
                      //   onClick={handleResetEmail}
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                  <span className="text-base">
                    New to Please
                    <Link
                      className=" link link-hover hover:text-red-500  text-purple-500 "
                      to="/register"
                    >
                      {" "}
                      Register
                    </Link>
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            {/* <p className="text-red-500 capitalize text-start">{error}</p> */}

            <div className="divider">OR</div>
            <div className="lg:flex items-center gap-3 mb-2 lg:mb-0">
              <button
                className="btn  lg:w-1/2 w-full"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle className="me-3" size={20} />
                Login
              </button>
              <button
                className="btn lg:w-1/2 w-full"
                //   onClick={handleGitHubSignIn}
              >
                <FaGithub className="me-3" size={20} />
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
