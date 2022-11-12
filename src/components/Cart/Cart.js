import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './Cart.css';

const Cart = ({ cart, cartActivities }) => {
	const totalPrice = cartActivities.reduce((prev, current) => prev + (current.price * current.cartQuantity), 0);
	const shippingCharges = cartActivities.reduce((prev, current) => prev + current.shipping, 0);
	const tax = parseFloat((totalPrice * 0.1).toFixed(2));
	const grandTotal = parseFloat((totalPrice + shippingCharges + tax).toFixed(2));

	return <div className='cartArea'>
		<h5>Order Summary</h5>

		<p className='body1'>Selected Items: {cart.length}</p>
		<p className='body1'>Total Price: ${totalPrice}</p>
		<p className='body1'>Total Shipping Charges: ${shippingCharges}</p>
		<p className='body1'>Tax (10%): ${tax}</p>

		<h6>Grand Total: ${grandTotal}</h6>

		<button className='btn delete body1'>Clear Cart <FontAwesomeIcon icon={faTrashCan} inverse /></button>
		<button className='btn review body1'>Review Order <FontAwesomeIcon icon={faArrowRight} inverse /></button>
	</div>
}
export default Cart;