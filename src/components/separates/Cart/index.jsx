import { Badge, Button, Drawer } from 'antd';
import cartIcon from '/public/cart.svg';
import cartIcon1 from '/public/f7--cart.svg';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from '../../../app/selector';
import CartItem from './CartItem';
import { fetchCart, removeFromCart } from './cartSlice';
export default function Cart() {
	const [open, setOpen] = useState(false);
	const handleOpenCart = () => {
		setOpen(!open);
	};

	const cart = useSelector(cartSelector);
	const dispatch = useDispatch();
	const handleRemoveFromCart = (productId) => {
		// dispatch(cartSlice.actions.removeFromCart(productId));
		dispatch(removeFromCart(productId))
	};
	const total = useMemo(() => {
		const result = cart.reduce((result, prod) => {
			
			const price = prod.productId?.price?.replace(/[^0-9]/g, '');
			return result + Number(price) * prod.quantity;
		}, 0);

		const mili = Math.floor(result / 1000000);
		const remainder = (result % 1000000) / 1000;

		return mili + ',' + remainder + ',000';
	}, [cart]);

	useEffect(() => {
		dispatch(fetchCart());
	}, []);
	return (
		<div>
			<Badge count={cart.length} className="hover:cursor-pointer pt-1">
				<img src={cartIcon} onClick={handleOpenCart} />
			</Badge>
			<Drawer
				title="GIỎ HÀNG CỦA BẠN"
				onClose={() => setOpen(false)}
				open={open}>
				{cart.length === 0 ? (
					<div>
						<div className="items-center flex flex-col w-full space-y-2">
							<img src={cartIcon1} width={100} height={100} />
							<p className="text-xl">Hiện chưa có sản phẩm!</p>
						</div>
						<div className="border-t-2 w-full my-6" />
					</div>
				) : (
					<div>
						{cart.map((item) => {
							const product = item.productId; 
							return (
								<div key={item._id}>
									<CartItem
										name={product.name}
										img={product.img}
										color={product.color}
										size={product.size}
										amount={item.quantity}
										price={product.price}
										onRemoveFromCart={() => handleRemoveFromCart(item._id)}
									/>
									<div className="border-t-2 w-full my-6" />
								</div>
							);
						})}
					</div>
				)}

				<div className="text-lg flex justify-between">
					<p className="font-semibold">Tổng tiền</p>
					<p className="font-bold">{total} VND</p>
				</div>
				<Button
					color="default"
					variant="solid"
					className="w-full mt-5 text-xl"
					size="large">
					THANH TOÁN
				</Button>
			</Drawer>
		</div>
	);
}
