import './Activities.css';
import Product from '../Product/Product';
import useActivities from '../../hooks/useActivities';

const Activities = ({ onAddToCart }) => {
	const { activities } = useActivities();

	return <div className='activities'>
		{activities?.map(product => <Product key={product.id} product={product} onAddToCart={onAddToCart} />)}
	</div>
}
export default Activities;