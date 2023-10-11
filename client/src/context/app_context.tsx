import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { AppContextState, CurrentUser } from "./types";

const AppContext = createContext<AppContextState>({
  currentUser: undefined,
  setCurrentUser: () => {},
  isCurrentUser: () => false,
});

export const useAppContext = () => {
  const contextValue = useContext(AppContext);
  if (!contextValue)
    throw new Error("AppContext should be used within the useAppContext!");
  return contextValue;
};

function AppProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<CurrentUser | undefined>(
    undefined,
  );
  const isCurrentUser = useCallback(
    (id: string) => currentUser && id === currentUser.id,
    [currentUser],
  );
  const value = useMemo(
    () => ({ isCurrentUser, currentUser, setCurrentUser }),
    [currentUser, isCurrentUser],
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
