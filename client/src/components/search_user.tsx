import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { Suspense, useDeferredValue, useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import DisplayUser from "./display_user";
import { User } from "../entities/types";
import { GET_USERS, SEARCH_USER } from "../entities/queries";
import DisplayLoader from "./display_loader";

function SearchComponent() {
  const navigate = useNavigate();
  const [displayUsers, setDisplayUsers] = useState<User[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const deferredSearchText = useDeferredValue(searchText);
  const [searchUser] = useLazyQuery(SEARCH_USER);

  useQuery(GET_USERS, {
    onCompleted: (data) => {
      setDisplayUsers(data.getUsers);
    },
  });

  useEffect(() => {
    searchUser({
      variables: {
        filter: {
          name: deferredSearchText,
          email: deferredSearchText,
        },
      },
      onCompleted: (data) => {
        setDisplayUsers(data.getUsers);
      },
    });
  }, [deferredSearchText]);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Search</h1>
      <div className="flex px-5 items-center rounded-lg bg-dark4">
        <MagnifyingGlassIcon className="w-5 h-5" />
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          className="w-full p-3 bg-dark4 text-white outline-none"
        />
      </div>
      <div className="flex flex-col space-y-7 mt-10 px-5">
        {displayUsers.map((item) => (
          <Suspense fallback={<DisplayLoader />} key={item.id}>
            <DisplayUser
              item={item}
              onClick={(userId) => navigate(`/profile/${userId}`)}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default SearchComponent;
