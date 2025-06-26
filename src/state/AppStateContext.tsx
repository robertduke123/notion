import { createContext } from "react";
import { usePageState } from "./UsePageState";

type AppStateContextType = ReturnType<typeof usePageState>;

const AppStateContext = createContext<AppStateContextType>(
	{} as AppStateContextType
);
