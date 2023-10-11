import React from "react";
import Avatar from "./avatar";
import { User } from "../entities/types";

function DisplayUser({
  item,
  onClick,
}: {
  item: User;
  onClick?: (id: string) => void;
}) {
  return (
    <div className="flex items-center space-x-2 justify-between">
      <div className="flex items-center space-x-2">
        <Avatar text={item.name} />
        <div className="flex flex-col">
          <h3 className="text-md truncate">{item.name}</h3>
          <p className="text-xs text-gray1">@{item.userName}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => onClick?.(item.id)}
          type="button"
          className="bg-primary p-1 px-3 rounded-md text-sm"
        >
          View
        </button>
      </div>
    </div>
  );
}

export default DisplayUser;
