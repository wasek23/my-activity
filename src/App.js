import './App.css';
import Activities from './components/Activities/Activities';
import Cart from './components/Cart/Cart';
import useActivities from './hooks/useActivities';
import useCart from './hooks/useCart';
import logo from './img/Logo.svg';

const App = () => {
	const { activities } = useActivities();
	const { cart, cartActivities, onAddToCart } = useCart();

	return <main className='activityPage'>
		<div className='mainArea'>
			<h1>
				<img src={logo} alt='My Activity' />
				MY ACTIVITY
			</h1>

			<h4>Select today's exercise</h4>

			<div className='activityContainer'>
				<Activities activities={activities} onAddToCart={onAddToCart} />
			</div>
		</div>

		<aside className='cartContainer'>
			<Cart activities={activities} cart={cart} cartActivities={cartActivities} />
		</aside>
	</main>
}
export default App;
