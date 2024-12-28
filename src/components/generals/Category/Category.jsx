import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Category({ img, name }) {
	return (
		<Link to={''} className='w-[365px] max-h-[455] min-h-[455]'>
			<img
				src={img}
				className="rounded-md object-cover"
				loading="lazy"
			/>
			<p className={`w-full mt-4 rounded-md text-center text-2xl py-3 border border-black hover:text-white hover:bg-black`}>
				{name.toUpperCase()}
			</p>
		</Link>
	);
}

Category.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};
