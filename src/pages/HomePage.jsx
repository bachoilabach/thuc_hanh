import { Link } from 'react-router-dom';
import Category from '../components/generals/Category/Category';
import MyCarousel from '../components/separates/Carousel';
import { categories } from '../jsons/Categories';
import { HomePagePolicies } from '../jsons/HomePagePolicies';
import rightArrow from '/public/right-arrow.svg';
import Product from '../components/generals/Product';
import { useDispatch, useSelector } from 'react-redux';
import { productSelector, productsStateSelector } from '../app/selector';
import { addToCart } from '../components/separates/Cart/cartSlice';
import { useEffect } from 'react';
import { fetchProduct } from '../components/generals/Product/ProductSlice';

export default function HomePage() {
	const products = useSelector(productSelector);
	const {status} = useSelector(productsStateSelector)
	const dispatch = useDispatch();
	const handleAddToCart = (product) => {
		// dispatch(cartSlice.actions.addToCart(product));
		dispatch(addToCart(product));
	};
	useEffect(() => {
		dispatch(fetchProduct());
	}, []);
	return (
		<div className="pt-20">
			<MyCarousel />

			{/* policy */}
			<div className="my-7 px-36 flex justify-around">
				{HomePagePolicies.map((policy, index) => (
					<div className="flex space-x-4 items-center" key={index}>
						<img src={policy.icon} />
						<div>
							<p className="font-semibold">{policy.title}</p>
							<p className="text-sm">{policy.des}</p>
						</div>
					</div>
				))}
			</div>

			{/* Categories */}
			<div className="px-36 grid grid-cols-4 gap-7">
				{categories.map((category, index) => (
					<Category key={index} img={category.img} name={category.name} />
				))}
			</div>

			{/* New arrival */}
			<div className="my-7 flex">
				<img
					src={'https://file.hstatic.net/1000184601/file/new_arrival_t12.jpg'}
					loading="lazy"
					width={'65%'}
				/>
				<div className="text-white bg-black w-full flex flex-col justify-center items-center">
					<h1 className="text-8xl font-bold ml-20">NEW ARRIVAL</h1>
					<img src={rightArrow} />
				</div>
			</div>

			{/* Best selling */}
			<div className="px-36">
				<div className="flex justify-between">
					<h1 className="font-semibold text-3xl">BÁN CHẠY NHẤT</h1>
					<Link to={''} className="text-2xl">
						Xem tất cả
						<img src={rightArrow} className="text-black" />
					</Link>
				</div>

				{status === 'failed' ? (
					<div className="grid grid-cols-4 gap-5">
						{Array.from({ length: 8 }).map((_, index) => (
							<div
								key={index}
								className="w-[400px] min-h-96 bg-gray-200 animate-pulse rounded-lg"></div>
						))}
					</div>
				) : (
					<div className="grid grid-cols-4 gap-5">
						{products.slice(0, 8).map((product) => (
							<Product
								name={product.name}
								img={product.img}
								price={product.price}
								key={product._id}
								onAddToCart={() => handleAddToCart(product)}
							/>
						))}
					</div>
				)}
				<Link to={'/collections/best-seller'}>
					<div className="flex justify-center items-center my-5">
						<button className="border border-black text-2xl font-semibold px-8 py-2 rounded-lg hover:text-white hover:bg-black">
							XEM THÊM
						</button>
					</div>
				</Link>
			</div>
		</div>
	);
}
