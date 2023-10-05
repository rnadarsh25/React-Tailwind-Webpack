import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  HomeIcon,
  ClipboardIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import SideButton from "./side_button";

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
    route: "/logout",
    icon: <ArrowLeftOnRectangleIcon className="w-7 h-7 mr-2" />,
  },
];
function SideBar() {
  const [activeTab, setActiveTab] = useState<string>("");
  return (
    <div className="w-2/12">
      <ul className="bg-green-400">
        {tabList.map((tab) => (
          <li className="mb-3">
            <SideButton
              onClick={() => setActiveTab(tab.name)}
              icon={tab.icon}
              isActive={activeTab === tab.name}
              text={tab.text}
              route={tab.route}
              name={tab.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
