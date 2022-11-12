import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = ({ product, onAddToCart }) => {
	const { id, img, name, age, time, description } = product;

	return <div className='product'>
		<figure>
			<img src={img} alt={name} />
		</figure>

		<div className='content'>
			<h6 className='name'>{name}</h6>

			<p className='body2 description'>{description}</p>

			<p className='body1'>For Age: {age}</p>
			<p className='body1'>Time Required: {time}M</p>
		</div>

		<button className='btn' onClick={() => onAddToCart(id)}>Add To List</button>
	</div>
}
export default Product;