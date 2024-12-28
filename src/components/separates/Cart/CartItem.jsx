import PropTypes from 'prop-types';
import cancelIcon from '/public/cancel.svg';
export default function CartItem({ name, img, color, size, amount = 0, price,onRemoveFromCart }) {
	return (
		<div className="flex space-x-2 relative">
			<img src={img} className="rounded-md" width={90} height={106} />
			<div>
				<p className="font-bold text-[16px]">{name}</p>
				<p>Màu sắc: {color}</p>
				<p>Size: {size}</p>
				<div className="flex justify-between">
					<p>Số lượng: {amount}</p>
					<p className="font-semibold">{price}</p>
				</div>
			</div>
			<div className="absolute right-0 top-0 hover:bg-gray-200 hover:cursor-pointer" onClick={onRemoveFromCart}>
				<img src={cancelIcon} />
			</div>
		</div>
	);
}

CartItem.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired
};
