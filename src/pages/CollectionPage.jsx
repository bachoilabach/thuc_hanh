import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/generals/Product';
import { productsFilterByPriceSelector } from '../app/selector';
import { useEffect } from 'react';
import cartSlice from '../components/separates/Cart/cartSlice';
import Filter from '../components/generals/Filter';
export default function CollectionPage() {
	const products = useSelector(productsFilterByPriceSelector);
	const dispatch = useDispatch();
	const handleAddToCart = (product) => {
		dispatch(cartSlice.actions.addToCart(product));
	};
	useEffect(() => {}, []);

	return (
		<div className="pt-28 flex flex-col sm:flex-row px-32 mb-10">
			{/* Filters */}
			<div className="w-3/12 pr-4">
				<div className=" h-full p-4">
					<Filter />
				</div>
			</div>

			{/* Product List */}
			<div className="w-9/12 pl-4">
				<div className="grid grid-cols-3 gap-5">
					{products.map((product) => (
						<Product
							name={product.name}
							img={product.img}
							price={product.price}
							key={product.id}
							onAddToCart={() => handleAddToCart(product)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
