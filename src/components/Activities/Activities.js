import './Activities.css';
import Activity from '../Activity/Activity';
import useActivities from '../../hooks/useActivities';

const Activities = ({ onAddToExercisers }) => {
	const { activities } = useActivities();

	return <div className='activities'>
		{activities?.map(activity => <Activity key={activity.id} activity={activity} onAddToExercisers={onAddToExercisers} />)}
	</div>
}
export default Activities;