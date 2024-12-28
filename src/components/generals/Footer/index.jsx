import { memo } from 'react';
import phoneIcon from '/public/phone.svg';
import envelopIcon from '/public/envelop.svg';
import { menuFooter } from '../../../jsons/MenuFooter';
import FooterMenu from './FooterMenu';

function Footer() {
	return (
		<div className="w-full bg-black py-4 px-48 text-white">
			{/* Contact */}
			<div className="flex justify-around">
				<div className="flex items-center">
					<img src={phoneIcon} />
					<p>Hoteline: 0123456789</p>
				</div>
				<div className="flex items-center space-x-2">
					<img src={envelopIcon} />
					<p>Email: 0123456789</p>
				</div>
			</div>
			<div className="border-t-2 w-full my-6" />
			<div className="flex justify-around">
				{menuFooter.map((ele, index) => (
					<FooterMenu title={ele.title} menu={ele.menu} key={index} />
				))}
			</div>
			<p className="text-center font-semibold text-xl mt-5">
				CÔNG TY TNHH COUPLE TX - MST: 0315524991
			</p>
			<div className="border-t-2 w-full my-6" />
		</div>
	);
}

export default memo(Footer);
