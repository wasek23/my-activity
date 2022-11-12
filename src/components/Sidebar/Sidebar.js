import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';
import logo from '../../img/Logo.svg';

const Sidebar = ({ sidebar, sidebarActivities }) => {

	return <div className='sidebarArea'>
		<div className='personDetails'>
			<img src={logo} alt='Wasek Bellah' />

			<div className='details'>
				<h2>Wasek Bellah</h2>
				<p><FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh</p>
			</div>
		</div>

		<div className='card personHealth'>
			<div>
				<p>45kg</p>
				<p className='textMuted'>Weight</p>
			</div>
			<div>
				<p>5.3</p>
				<p className='textMuted'>Height</p>
			</div>
			<div>
				<p>24yrs</p>
				<p className='textMuted'>Age</p>
			</div>
		</div>

		<h2>Add a break</h2>
		<br />
		<div className='card breakTime'>
			<p>10s</p>
			<p>20s</p>
			<p>30s</p>
			<p>40s</p>
			<p>50s</p>
		</div>

		<h2>Exercise details</h2>
		<br />

		<p className='card'>
			<h2>Exercise time</h2>
			<h2 className='textMuted'>{ }minutes</h2>
		</p>

		<p className='card'>
			<h2>Break time</h2>
			<h2 className='textMuted'>{ }seconds</h2>
		</p>

		<button className='btn review body1'>Completed Activity</button>
	</div>
}
export default Sidebar;