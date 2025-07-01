import type { NodeType } from "../utils/types";
import { UseOverflowsScreenBottom } from "./UseOverflowsScreenBottom";

type CommandPanelProps = {
	nodeText: string;
	selectItem: (nodeType: NodeType) => void;
};

export const CommandPanel = ({ nodeText, selectItem }: CommandPanelProps) => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	const { overflows, ref } = UseOverflowsScreenBottom();
};
