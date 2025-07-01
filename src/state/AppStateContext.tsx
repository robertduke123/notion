import { createContext, useContext } from "react";
import { usePageState } from "./UsePageState";
import type { Page } from "../utils/types";

type AppStateContextType = ReturnType<typeof usePageState>;

const AppStateContext = createContext<AppStateContextType>(
	{} as AppStateContextType
);

type AppStateProviderProps = {
	children: React.ReactNode;
	initialState: Page;
};

export const AppStateProvider = ({
	children,
	initialState,
}: AppStateProviderProps) => {
	const PageStateHandlers = usePageState(initialState);

	return (
		<AppStateContext.Provider value={PageStateHandlers}>
			{children}
		</AppStateContext.Provider>
	);
};

export const useAppState = () => useContext(AppStateContext);
