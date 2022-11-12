import './Activities.css';
import Activity from '../Activity/Activity';
import useActivities from '../../hooks/useActivities';

const Activities = ({ onAddToSidebar }) => {
	const { activities } = useActivities();

	return <div className='activities'>
		{activities?.map(activity => <Activity key={activity.id} activity={activity} onAddToSidebar={onAddToSidebar} />)}
	</div>
}
export default Activities;