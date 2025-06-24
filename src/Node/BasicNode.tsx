import {
	useEffect,
	useRef,
	type FormEventHandler,
	type KeyboardEventHandler,
} from "react";
import type { NodeData } from "../utils/types";
import styles from "./Node.module.css";
import { nanoid } from "nanoid";

type BasicNodeProps = {
	node: NodeData;
	updateFocusedIndex(index: number): void;
	isFocused: boolean;
	index: number;
	addNode(node: NodeData, index: number): void;
	removeNodeByIndex(index: number): void;
	changeNodeValue(index: number, value: string): void;
};

const BasicNode = ({
	node,
	updateFocusedIndex,
	isFocused,
	index,
	addNode,
	removeNodeByIndex,
	changeNodeValue,
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

	const handleInput: FormEventHandler<HTMLDivElement> = ({ currentTarget }) => {
		const { textContent } = currentTarget;
		changeNodeValue(index, textContent || "");
	};

	const handleClick = () => {
		updateFocusedIndex(index);
	};

	const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
		const { target } = event;
		if (event.key == "Enter") {
			event.preventDefault();
			if (target.textContent?.[0] === "/") {
				return;
			}
			addNode({ type: node.type, value: "", id: nanoid() }, index + 1);
			updateFocusedIndex(index + 1);
		}
	};

	return (
		<div
			onInput={handleInput}
			onClick={handleClick}
			onKeyDown={onKeyDown}
			ref={nodeRef}
			contentEditable
			suppressContentEditableWarning
		/>
	);
};

export default BasicNode;
