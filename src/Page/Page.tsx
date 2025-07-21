import useFocusedNodeIndex from "./useFocusedNodeIndex";
import { Cover } from "./Cover";
import { Title } from "./Title";
import { NodeContainer } from "../Node/NodeContainer";
import Spacer from "./Spacer";
import { nanoid } from "nanoid";
import "./Page.module.css";
import { useAppState } from "../state/AppStateContext";
import { DndContext, DragOverlay, type DragEndEvent } from "@dnd-kit/core";
import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export const Page = () => {
	const { nodes, title, setTitle, addNode, reorderNodes } = useAppState();
	const [focusedNodeIndex, setFocusedNodeIndex] = useFocusedNodeIndex({
		nodes,
	});

	const handleDragEvent = (event: DragEndEvent) => {
		const { active, over } = event;
		if (over?.id && over?.id !== active?.id) {
			reorderNodes(active.id as string, over.id as string);
		}
	};

	return (
		<>
			<Cover />
			<div>
				<Title addNode={addNode} title={title} changePageTitle={setTitle} />
				<DndContext onDragEnd={handleDragEvent}>
					<SortableContext items={nodes} strategy={verticalListSortingStrategy}>
						{nodes.map((node, index) => (
							<NodeContainer
								key={node.id}
								node={node}
								isFocused={focusedNodeIndex === index}
								updateFocusedIndex={setFocusedNodeIndex}
								index={index}
							/>
						))}
					</SortableContext>
					<DragOverlay />
				</DndContext>
				<Spacer
					handleClick={() => {
						addNode({ type: "text", value: "", id: nanoid() }, nodes.lengt);
					}}
					showHint={!nodes.length}
				/>
			</div>
		</>
	);
};
