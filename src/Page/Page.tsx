import { useState } from "react";
import type { NodeData } from "../utils/types";

export const Page = () => {
	const [nodes, setNodes] = useState<NodeData[]>([]);

	const addNode = (node: NodeData, index: number) => {
		const newNodes = [...nodes];
		newNodes.splice(index, 0, node);
		setNodes(newNodes);
	};

	return <div>Page</div>;
};
