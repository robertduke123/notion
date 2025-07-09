import { Route, Routes } from "react-router-dom";
import { Page } from "./Page/Page";
import { AppStateProvider } from "./state/AppStateContext";
import { createPage } from "./utils/createPage";
const initialState = createPage();

const Auth = () => {
	return <div>Test</div>;
};

function App() {
	return (
		<Routes>
			<Route path="auth" element={<Auth />} />
			<Route
				path="/:id"
				element={
					<AppStateProvider initialState={initialState}>
						<Page />
					</AppStateProvider>
				}
			/>
			<Route
				path="/"
				element={
					<AppStateProvider initialState={initialState}>
						<Page />
					</AppStateProvider>
				}
			/>
		</Routes>
	);
}

export default App;
