import { useEffect, useState } from 'react';

import useActivities from './useActivities';

const useCart = () => {
	const { activities } = useActivities();

	const [cart, setCart] = useState([]);
	const [cartActivities, setCartActivities] = useState([]);

	// Get from localStorage
	useEffect(() => {
		const storedCart = localStorage.getItem('emaCart');
		if (storedCart) {
			setCart(JSON.parse(storedCart));
		}
	}, []);

	// Get cart activities
	useEffect(() => {
		let cartItems = [];

		activities?.map(product => {
			for (const c of cart) {
				product.id === c.id && cartItems.push({ ...product, cartQuantity: c.quantity });
			}

			return null;
		});
		setCartActivities(cartItems);
	}, [activities, cart]);

	// On add to cart
	const onAddToCart = (id) => {
		const isInCart = cart.find(c => c.id === id);

		if (isInCart) {
			const index = cart.indexOf(isInCart);

			const newCart = [...cart];
			newCart[index] = { ...newCart[index], quantity: newCart[index].quantity + 1 };

			setCart(newCart);
			localStorage.setItem('emaCart', JSON.stringify(newCart));
		} else {
			const newCart = [...cart, { id, quantity: 1 }];

			setCart(newCart);
			localStorage.setItem('emaCart', JSON.stringify(newCart));
		}
	}

	// On clear cart
	const onClearCart = () => {
		setCart([]);
		localStorage.removeItem('emaCart');
	}

	return { cart, cartActivities, onAddToCart, onClearCart }
}
export default useCart;