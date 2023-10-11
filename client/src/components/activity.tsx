import React from "react";
import { useQuery } from "@apollo/client";
import Avatar from "./avatar";
import { GET_ACTIVITY } from "../entities/queries";
import DisplayLoader from "./display_loader";
import { UserActivity } from "../entities/types";

function Activity() {
  const { data, loading, error } = useQuery(GET_ACTIVITY);
  if (loading) return <DisplayLoader />;
  if (error) return <DisplayLoader type="error" />;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Activity</h1>
      {data?.getActivity.map((item: UserActivity) => (
        <div
          className="flex items-center bg-dark4 p-2 rounded-lg mb-2"
          key={item.user.id}
        >
          <Avatar text={item.user.name} />
          <h3 className="text-md ml-2 font-bold">{item.user.name}</h3>
          <span className="text-md">&nbsp;{item.message}</span>
        </div>
      ))}
    </div>
  );
}

export default Activity;
