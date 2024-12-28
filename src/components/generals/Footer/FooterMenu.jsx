import PropTypes from 'prop-types';
export default function FooterMenu({ title, menu }) {
	return (
		<div className="text-white flex flex-col space-y-2">
			<p className="font-semibold mb-2">{title}</p>
			{menu.map((ele, index) => (
				<p key={index} className="hover:cursor-pointer">
					{ele.name}
				</p>
			))}
		</div>
	);
}
FooterMenu.propTypes = {
	title: PropTypes.string.isRequired,
	menu: PropTypes.array.isRequired,
};
