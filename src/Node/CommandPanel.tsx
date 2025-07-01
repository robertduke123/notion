import { useEffect, useState } from "react";
import type { NodeType } from "../utils/types";
import styles from "./CommandPanel.module.css";
import cx from "classnames";
import { UseOverflowsScreenBottom } from "./UserOverflowsScreenBottom";

type CommandPanelProps = {
	nodeText: string;
	selectItem: (nodeType: NodeType) => void;
};

type SupportedNodeType = {
	value: NodeType;
	name: string;
};

const supportedNodeTypes: SupportedNodeType[] = [
	{ value: "text", name: "Text" },
	{ value: "list", name: "List" },
	{ value: "heading1", name: "Heading1" },
	{ value: "heading2", name: "Heading2" },
	{ value: "heading3", name: "Heading3" },
];

export const CommandPanel = ({ nodeText, selectItem }: CommandPanelProps) => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	const { overflows, ref } = UseOverflowsScreenBottom();

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Enter") {
				selectItem(supportedNodeTypes[selectedItemIndex].value);
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [selectedItemIndex, selectItem]);

	useEffect(() => {
		const normalizedValue = nodeText.toLowerCase().replace(/\//, "");
		setSelectedItemIndex(
			supportedNodeTypes.findIndex((item) => item.value.match(normalizedValue))
		);
	}, [nodeText]);

	return (
		<div
			ref={ref}
			className={cx(styles.panel, { [styles.reverse]: overflows })}>
			<div className={styles.title}>Blocks</div>
			<ul>
				{supportedNodeTypes.map((type, index) => {
					const selected = selectedItemIndex === index;

					return (
						<li
							key={type.value}
							className={cx({ [styles.selected]: selected })}
							onClick={() => selectItem(type.value)}>
							{type.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
