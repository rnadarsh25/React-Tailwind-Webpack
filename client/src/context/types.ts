import { Dispatch, SetStateAction } from "react";

export type CurrentUser = {
  name: string;
  email: string;
  userName: string;
  token: string;
  id: string;
};

export type AppContextState = {
  currentUser: CurrentUser | undefined;
  setCurrentUser: Dispatch<SetStateAction<CurrentUser | undefined>>;
  isCurrentUser: (id: string) => boolean;
};
