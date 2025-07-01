import { useEffect, useRef, useState } from "react";

export const UseOverflowsScreenBottom = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [overflows, setOverflows] = useState(false);

	useEffect(() => {
		if (ref.current) {
			const { bottom } = ref.current.getBoundingClientRect();
			const { innerHeight } = window;
			setOverflows(bottom > innerHeight);
		}
	}, []);

	return { overflows, ref };
};
