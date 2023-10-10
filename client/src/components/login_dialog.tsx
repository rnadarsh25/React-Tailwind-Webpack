import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Dialog from "./dialog";

function LoginDialog({ onClose }: { onClose: () => void }) {
  return (
    <Dialog title="Sign in to Byte" onClose={onClose}>
      <div className="flex flex-col space-y-3">
        <button
          type="button"
          className="flex space-x-2 items-center justify-center border border-gray-700 rounded-full p-2 hover:bg-gray-100 hover:text-black"
        >
          <AcademicCapIcon className="w-7 h-7" />
          <p>Sign in with Google</p>
        </button>

        <button
          type="button"
          className="flex space-x-2 items-center justify-center border border-gray-700 rounded-full p-2 hover:bg-gray-100 hover:text-black"
        >
          <AcademicCapIcon className="w-7 h-7" />
          <p>Sign in with Apple</p>
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <input
          placeholder="Email or userName"
          className="w-full p-2 px-3 border border-gray-200 rounded-lg outline-none"
        />
        <input
          placeholder="Password"
          className="w-full p-2 px-3 border border-gray-200 rounded-lg outline-none"
        />
        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 bg-primary text-white"
        >
          Sign In
        </button>
        <p>
          Don't have an account?
          <span className="text-primary font-bold">&nbsp;Sign up</span>
        </p>
      </div>
    </Dialog>
  );
}

export default LoginDialog;
