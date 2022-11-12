import { useEffect, useState } from 'react'

const useActivities = () => {
	const [activities, setActivities] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		try {
			setIsLoading(true);

			fetch('activities.json')
				.then(res => res.json())
				.then(data => setActivities(data));
		}
		catch (err) {
			setError(err);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { activities, isLoading, error }
}
export default useActivities;