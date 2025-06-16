import { useEffect, useRef } from "react";
import type { NodeData } from "../utils/types";
import styles from "./Node.module.css";

type BasicNodeProps = {
	node: NodeData;
	updateFocusedIndex(index: number): void;
	isFocused: boolean;
	index: number;
	addNode(node: NodeData, index: number): void;
	removeNodeByIndex(index: number): void;
	changeNodeByIndex(index: number, value: string): void;
};

const BasicNode = ({
	node,
	updateFocusedIndex,
	isFocused,
	index,
	addNode,
	removeNodeByIndex,
	changeNodeByIndex,
}: BasicNodeProps) => {
	const nodeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isFocused) {
			nodeRef.current?.focus();
		} else {
			nodeRef.current?.blur();
		}
	}, [isFocused]);

	useEffect(() => {
		if (nodeRef.current && !isFocused) {
			nodeRef.current.textContent = node.value;
		}
	}, [node]);

	return <div ref={nodeRef} contentEditable suppressContentEditableWarning />;
};

export default BasicNode;
