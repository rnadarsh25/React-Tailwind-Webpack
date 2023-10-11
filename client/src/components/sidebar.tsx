import React, { useState } from "react";
import {
  HomeIcon,
  ClipboardIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import SideButton from "./side_button";
import { useAppContext } from "../context/app_context";
import { USER_LOGOUT } from "../entities/queries";

const tabList = [
  {
    name: "home",
    text: "Home",
    route: "/",
    icon: <HomeIcon className="w-7 h-7 mr-2" />,
  },
  {
    name: "search",
    text: "Search",
    route: "/search",
    icon: <MagnifyingGlassIcon className="w-7 h-7 mr-2" />,
  },
  {
    name: "activity",
    text: "Activity",
    route: "/activity",
    icon: <BellAlertIcon className="w-7 h-7 mr-2" />,
  },
  {
    name: "create",
    text: "Create Bit",
    route: "/create",
    icon: <ClipboardIcon className="w-7 h-7 mr-2" />,
  },
  {
    name: "profile",
    text: "Profile",
    route: "/profile",
    icon: <UserCircleIcon className="w-7 h-7 mr-2" />,
  },
  {
    name: "logout",
    text: "Logout",
    route: "/",
    icon: <ArrowLeftOnRectangleIcon className="w-7 h-7 mr-2" />,
  },
];
function SideBar() {
  const { setCurrentUser } = useAppContext();
  const navigate = useNavigate();
  const { currentUser } = useAppContext();
  const [logOut] = useLazyQuery(USER_LOGOUT);
  const [activeTab, setActiveTab] = useState<string>("");

  const handleLogout = () => {
    logOut();
    setCurrentUser(undefined);
    localStorage.setItem("CurrentUser", "");
    navigate("/");
  };

  return (
    <div className="w-2/12 mt-7">
      <ul className="">
        {tabList.map((tab) => (
          <li className="mb-3" key={tab.name}>
            <SideButton
              onClick={() =>
                tab.name === "logout" ? handleLogout() : setActiveTab(tab.name)
              }
              icon={tab.icon}
              isActive={activeTab === tab.name}
              text={tab.text}
              route={
                tab.name === "profile"
                  ? `${tab.route}/${currentUser?.id || ""}`
                  : tab.route
              }
              name={tab.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
