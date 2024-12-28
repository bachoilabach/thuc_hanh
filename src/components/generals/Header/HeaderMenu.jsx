import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HeaderMenu({ to, name, className }) {
	return (
		<>
			<Link to={to} className={`${className}`}>
				<p className="font-bold text-xl">{name.toUpperCase()}</p>
			</Link>
		</>
	);
}
HeaderMenu.propTypes = {
	to: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
};
