import { useEffect, useState } from 'react';

import useActivities from './useActivities';

const useSidebar = () => {
	const { activities } = useActivities();

	const [sidebar, setSidebar] = useState([]);
	const [sidebarActivities, setSidebarActivities] = useState([]);

	// Get from localStorage
	useEffect(() => {
		const storedSidebar = localStorage.getItem('emaSidebar');
		if (storedSidebar) {
			setSidebar(JSON.parse(storedSidebar));
		}
	}, []);

	// Get sidebar activities
	useEffect(() => {
		let sidebarItems = [];

		activities?.map(activity => {
			for (const c of sidebar) {
				activity.id === c.id && sidebarItems.push({ ...activity, sidebarQuantity: c.quantity });
			}

			return null;
		});
		setSidebarActivities(sidebarItems);
	}, [activities, sidebar]);

	// On add to sidebar
	const onAddToSidebar = (id) => {
		const isInSidebar = sidebar.find(c => c.id === id);

		if (isInSidebar) {
			const index = sidebar.indexOf(isInSidebar);

			const newSidebar = [...sidebar];
			newSidebar[index] = { ...newSidebar[index], quantity: newSidebar[index].quantity + 1 };

			setSidebar(newSidebar);
			localStorage.setItem('emaSidebar', JSON.stringify(newSidebar));
		} else {
			const newSidebar = [...sidebar, { id, quantity: 1 }];

			setSidebar(newSidebar);
			localStorage.setItem('emaSidebar', JSON.stringify(newSidebar));
		}
	}

	// On clear sidebar
	const onClearSidebar = () => {
		setSidebar([]);
		localStorage.removeItem('emaSidebar');
	}

	return { sidebar, sidebarActivities, onAddToSidebar, onClearSidebar }
}
export default useSidebar;