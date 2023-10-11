import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import DisplayUser from "./display_user";
import { GET_USERS } from "../entities/queries";
import DisplayLoader from "./display_loader";
import { User } from "../entities/types";

function RightSideBar() {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <DisplayLoader />;
  if (error) return <DisplayLoader type="error" />;

  return (
    <div className="w-2/12 mt-7">
      <div className="flex flex-col space-y-7">
        <h3 className="text-2xl ">Shared Minds</h3>
        {data?.getUsers?.map((item: User) => (
          <DisplayUser
            item={item}
            key={item.id}
            onClick={(userId) => navigate(`/profile/${userId}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default RightSideBar;
