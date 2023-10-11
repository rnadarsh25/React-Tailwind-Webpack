import React, { ChangeEvent, useState } from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Dialog from "./dialog";
import { USER_LOGIN } from "../entities/queries";
import { useAppContext } from "../context/app_context";

function LoginDialog({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const { setCurrentUser } = useAppContext();
  const [userDetails, setUserDetails] = useState({
    emailUserName: "",
    password: "",
  });

  const [userLogin] = useLazyQuery(USER_LOGIN);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = () => {
    const { emailUserName, password } = userDetails;
    if (!emailUserName || !password) return;
    userLogin({
      variables: {
        creds: {
          email: emailUserName,
          password,
        },
      },
      onCompleted: (data) => {
        if (data) {
          const updatedUser = { ...data?.login.user, token: data?.login.token };
          setCurrentUser(updatedUser);
          localStorage.setItem("CurrentUser", JSON.stringify(updatedUser));
          onClose();
          navigate("/");
        }
      },
    });
  };

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
          value={userDetails.emailUserName}
          onChange={handleOnChange}
          name="emailUserName"
          placeholder="Email or userName"
          className="w-full p-2 px-3 border border-gray-200 rounded-lg outline-none"
        />
        <input
          type="password"
          value={userDetails.password}
          onChange={handleOnChange}
          name="password"
          placeholder="Password"
          className="w-full p-2 px-3 border border-gray-200 rounded-lg outline-none"
        />
        <button
          onClick={handleOnSubmit}
          type="button"
          className="flex items-center justify-center rounded-lg p-2 bg-primary text-white"
        >
          Sign In
        </button>
        <p>
          Don&apos;t have an account?
          <span className="text-primary font-bold">&nbsp;Sign up</span>
        </p>
      </div>
    </Dialog>
  );
}

export default LoginDialog;
