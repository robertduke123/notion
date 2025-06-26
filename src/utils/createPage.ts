import { nanoid } from "nanoid";

export const createPage = () => {
	const slug = nanoid();
	const id = nanoid();

	const page = {
		title: "Untitled",
		id,
		slug,
		nodes: [],
		cover: "",
	};
	return page;
};
