import './App.css';
import Activities from './components/Activities/Activities';
import Sidebar from './components/Sidebar/Sidebar';
import useActivities from './hooks/useActivities';
import useSidebar from './hooks/useSidebar';
import logo from './img/Logo.svg';

const App = () => {
	const { activities } = useActivities();
	const { sidebar, sidebarActivities, onAddToSidebar } = useSidebar();

	return <main className='activityPage'>
		<div className='mainAreaWrapper'>
			<div className='mainArea'>
				<h1>
					<img src={logo} alt='My Activity' />
					MY ACTIVITY
				</h1>

				<h2>Select today's exercise</h2>

				<div className='activityContainer'>
					<Activities activities={activities} onAddToSidebar={onAddToSidebar} />
				</div>
			</div>
		</div>

		<aside className='sidebarContainer'>
			<Sidebar activities={activities} sidebar={sidebar} sidebarActivities={sidebarActivities} />
		</aside>
	</main>
}
export default App;
