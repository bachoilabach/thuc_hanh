import { useState } from 'react';
import searchIcon from '/public/search.svg';
import userIcon from '/public/user.svg';
import { Link } from 'react-router-dom';
import Cart from '../../separates/Cart';
export default function HeaderRight() {
	const [searchText, setSearchText] = useState('');
	const handleChangeSearchText = (e) => {
		setSearchText(e.target.value);
	};
	return (
		<div className="flex items-center space-x-4">
			<div className="flex items-center space-x-1 border-b-black border-b-2">
				<img src={searchIcon} />
				<input
					value={searchText}
					onChange={handleChangeSearchText}
					name="search"
					placeholder="TÌM KIỂM"
					className="px-2 py-1 border-none outline-none"
				/>
			</div>
			<Link to={''}>
				<img src={userIcon} />
			</Link>
			<Cart />
		</div>
	);
}
