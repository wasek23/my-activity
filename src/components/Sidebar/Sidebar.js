import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';
import logo from '../../img/Logo.svg';

const Sidebar = ({ exercisers, exercisersActivities }) => {
	const [breakTime, setBreakTime] = useState();

	useEffect(() => {
		const localBreakTime = localStorage.getItem('breakTime');
		if (localBreakTime) {
			setBreakTime(parseInt(localBreakTime));
		}
	}, []);

	const onBreakTime = (time) => {
		localStorage.setItem('breakTime', time);
		setBreakTime(time);
	}

	const exerciseTimes = exercisersActivities.reduce((prev, current) => prev + (current.time * current.quantity), 0);

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
			<p className={10 === breakTime ? 'active' : ''} onClick={() => onBreakTime(10)}>10s</p>
			<p className={20 === breakTime ? 'active' : ''} onClick={() => onBreakTime(20)}>20s</p>
			<p className={30 === breakTime ? 'active' : ''} onClick={() => onBreakTime(30)}>30s</p>
			<p className={40 === breakTime ? 'active' : ''} onClick={() => onBreakTime(40)}>40s</p>
			<p className={50 === breakTime ? 'active' : ''} onClick={() => onBreakTime(50)}>50s</p>
		</div>

		<h2>Exercise details</h2>
		<br />

		<p className='card'>
			<h2>Exercise time</h2>
			<h2 className='textMuted'>{exerciseTimes} minutes</h2>
		</p>

		<p className='card'>
			<h2>Break time</h2>
			<h2 className='textMuted'>{breakTime} seconds</h2>
		</p>

		<button className='btn review body1'>Completed Activity</button>
	</div>
}
export default Sidebar;