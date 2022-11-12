import { useEffect, useState } from 'react';

import useActivities from './useActivities';

const useExercise = () => {
	const { activities } = useActivities();

	const [exercisers, setExercisers] = useState([]);
	const [exercisersActivities, setExercisersActivities] = useState([]);

	// Get from localStorage
	useEffect(() => {
		const storedExercisers = localStorage.getItem('exercisers');
		if (storedExercisers) {
			setExercisers(JSON.parse(storedExercisers));
		}
	}, []);

	// Get exercisers activities
	useEffect(() => {
		let exercisersItems = [];

		activities?.map(activity => {
			for (const exercise of exercisers) {
				activity.id === exercise.id && exercisersItems.push({ ...activity, quantity: exercise.quantity });
			}

			return null;
		});
		setExercisersActivities(exercisersItems);
	}, [activities, exercisers]);

	// On add to exercisers
	const onAddToExercisers = (id) => {
		const isInExercisers = exercisers.find(exercise => exercise.id === id);

		if (isInExercisers) {
			const index = exercisers.indexOf(isInExercisers);

			const newExercisers = [...exercisers];
			newExercisers[index] = { ...newExercisers[index], quantity: newExercisers[index].quantity + 1 };

			setExercisers(newExercisers);
			localStorage.setItem('exercisers', JSON.stringify(newExercisers));
		} else {
			const newExercisers = [...exercisers, { id, quantity: 1 }];

			setExercisers(newExercisers);
			localStorage.setItem('exercisers', JSON.stringify(newExercisers));
		}
	}

	return { exercisers, exercisersActivities, onAddToExercisers }
}
export default useExercise;