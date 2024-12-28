import { Card } from 'antd';
import heartIcon from '/public/heart.svg';
import redHeartIcon from '/public/red-heart.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Product({ img, name, price, onAddToCart }) {
	const [clickHeart, setClickHeart] = useState(false);
	const handleClickHeart = () => {
		setClickHeart(!clickHeart);
	};
	return (
		<Card
			hoverable
			className="w-[400px]  relative group"
			cover={
				<img alt="example" src={img} loading="lazy" className="max-h-[490px]" />
			}>
			<div className="text-lg">
				<p>{name}</p>
				<p className="font-bold mt-2">{price}</p>
			</div>
			<div
				className="absolute p-2 bg-white top-2 right-2 rounded-full hidden group-hover:block"
				onClick={handleClickHeart}>
				{clickHeart ? <img src={redHeartIcon} /> : <img src={heartIcon} />}
			</div>
			<div
				className="absolute p-2 left-0 text-center rounded-md bg-white ml-1 w-[98%] bottom-[22%] border-black border hidden group-hover:block hover:text-white hover:bg-black"
				onClick={onAddToCart}>
				<p className="font-semibold">THÊM VÀO GIỎ</p>
			</div>
		</Card>
	);
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	onAddToCart: PropTypes.func.isRequired,
};
