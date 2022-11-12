import './App.css';
import Activities from './components/Activities/Activities';
import Sidebar from './components/Sidebar/Sidebar';
import useActivities from './hooks/useActivities';
import useExercise from './hooks/useExercise';
import logo from './img/Logo.svg';

const App = () => {
	const { activities } = useActivities();
	const { exercisers, exercisersActivities, onAddToExercisers } = useExercise();

	return <main className='activityPage'>
		<div className='mainAreaWrapper'>
			<div className='mainArea'>
				<h1>
					<img src={logo} alt='My Activity' />
					MY ACTIVITY
				</h1>

				<h2>Select today's exercise</h2>

				<div className='activityContainer'>
					<Activities activities={activities} onAddToExercisers={onAddToExercisers} />
				</div>
			</div>
		</div>

		<aside className='sidebarContainer'>
			<Sidebar activities={activities} exercisers={exercisers} exercisersActivities={exercisersActivities} />
		</aside>
	</main>
}
export default App;
