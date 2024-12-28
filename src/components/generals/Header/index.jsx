import { useEffect } from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderRight from './HeaderRight';
import { useNavigate } from 'react-router-dom';

const Logo =
	'https://file.hstatic.net/1000364782/file/cptx_logo_322969f688f54576a5c7f777389ca844.svg';

const listHeaderMenu = [
	{
		title: 'Hàng mới',
		to: 'new-arrivals',
	},
	{
		title: 'Giảm giá',
		to: 'sale-off',
	},
	{
		title: 'Nam',
		to: 'collections/nam',
	},
	{
		title: 'Nữ',
		to: 'collections/nu',
	},
	{
		title: 'Đồ đôi',
		to: 'collections/cp',
	},
];

export default function Header() {
	const navigate = useNavigate();
	useEffect(() => {}, []);

	return (
		<div className="bg-white shadow-lg w-full min-h-20 flex px-36 justify-between fixed top-0 z-50">
			{/* Logo */}
			<img
				src={Logo}
				className="cursor-pointer"
				alt="Logo"
				width={148}
				height={30}
				onClick={() => navigate('/')}
			/>

			{/* Navigation */}
			<div className="flex items-center space-x-8">
				{listHeaderMenu.map((menu, index) => (
					<HeaderMenu
						key={index}
						name={menu.title}
						to={menu.to}
						className={'hover:underline'}
					/>
				))}
			</div>

			{/* Search, Account */}
			<HeaderRight />
		</div>
	);
}
