import React, { useState } from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logoB.png";
import LoginDialog from "./login_dialog";

function Login() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-around items-center h-screen">
      <img src={logo} className="w-30 h-30 bg-white rounded-full" alt="Byte" />
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl baseline">Happening now</h1>
        <div className="flex flex-col space-y-3">
          <h3 className="text-3xl baseline">Join today.</h3>
          <button
            type="button"
            className="flex space-x-2 items-center justify-center border border-gray-700 rounded-full p-2 hover:bg-white hover:text-black"
          >
            <AcademicCapIcon className="w-7 h-7" />
            <p>Sign up with Google</p>
          </button>

          <button
            type="button"
            className="flex space-x-2 items-center justify-center border border-gray-700 rounded-full p-2 hover:bg-white hover:text-black"
          >
            <AcademicCapIcon className="w-7 h-7" />
            <p>Sign up with Apple</p>
          </button>
        </div>
        <div className="flex flex-col space-y-2">
          <button
            type="button"
            className="flex space-x-2 items-center justify-center border border-gray-700 bg-primary rounded-full p-2 hover:bg-white hover:text-black"
          >
            <AcademicCapIcon className="w-7 h-7" />
            <p>Create Account</p>
          </button>
          <p className="max-w-sm px-3">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h5 className="text-lg">Already have an account?</h5>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex space-x-2 items-center justify-center border border-primary text-primary rounded-full p-2 hover:bg-white hover:text-black"
          >
            <AcademicCapIcon className="w-7 h-7" />
            <p>Sign in</p>
          </button>
        </div>
      </div>
      {isOpen && <LoginDialog onClose={() => setIsOpen((prev) => !prev)} />}
    </div>
  );
}

export default Login;
