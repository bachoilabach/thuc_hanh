import { useState, useRef } from 'react';
import plusIcon from '/public/plus.svg';
import minusIcon from '/public/minus.svg';
import { Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import filterSlice from './filterSlice';

const menuItems = [
	{
		id: 'color',
		title: 'Màu sắc',
		type: 'circle',
		options: [
			{ label: 'den', value: 'black' },
			{ label: 'xanh', value: 'green' },
			{ label: 'hong', value: 'pink' },
		],
	},
	{ id: 'gender', title: 'Giới tính', type: 'radio', options: ['Nam', 'Nữ'] },
];

export default function MenuFilter() {
	const [expanded, setExpanded] = useState({});
	const dispatch = useDispatch();
	const [color, setColor] = useState('');
	const [gender, setGender] = useState('');
	const contentRefs = useRef({});

	const handleChangeColor = (value) => {
		setColor(value);
		dispatch(filterSlice.actions.setColor(value));
	};

	const handleChangeGender = (event) => {
		let value = event.target.value.toLowerCase();
		setGender(value);
		value === 'nam' ? 'nam' : value = 'nu';
		dispatch(filterSlice.actions.setGender(value));
	};

	const toggleExpand = (id) => {
		setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
	};

	return (
		<div className="mt-2 w-full border border-black p-2">
			{menuItems.map((item) => (
				<div key={item.id}>
					{/* Tiêu đề */}
					<div
						className="flex text-base font-semibold justify-between cursor-pointer pt-1"
						onClick={() => toggleExpand(item.id)}>
						<p>{item.title}</p>
						<img
							src={expanded[item.id] ? minusIcon : plusIcon}
							alt="toggle-icon"
						/>
					</div>

					{/* Nội dung */}
					<div
						ref={(el) => (contentRefs.current[item.id] = el)}
						className="overflow-hidden transition-all duration-300"
						style={{
							height: expanded[item.id]
								? `${contentRefs.current[item.id]?.scrollHeight}px`
								: '0px',
						}}>
						<div className="mt-2 space-y-2">
							{/* Render tùy thuộc vào type */}
							{item.type === 'circle' && (
								<div className="grid grid-cols-6 gap-5">
									{item.options.map((option, index) => (
										<Tooltip
											key={index}
											className="hover:cursor-pointer"
											placement="bottom"
											title={option.label}>
											<span
												className={`w-10 min-h-10 rounded-full border border-gray-400 inline-block ${
													color === option.value ? 'border-blue-500' : ''
												}`}
												style={{ backgroundColor: option.value }}
												onClick={() => handleChangeColor(option.label)}
											/>
										</Tooltip>
									))}
								</div>
							)}

							{item.type === 'radio' && (
								<div className="space-y-2">
									{item.options.map((option, index) => (
										<div key={index} className="flex items-center space-x-2">
											<input
												type="radio"
												id={`${item.id}-${option}`}
												name={item.id}
												value={option}
												checked={gender === option.toLowerCase()}
												onChange={handleChangeGender}
												className="cursor-pointer"
											/>
											<label
												htmlFor={`${item.id}-${option}`}
												className="cursor-pointer">
												{option}
											</label>
										</div>
									))}
								</div>
							)}
						</div>
					</div>

					<div className="border-t w-full my-3 border-black" />
				</div>
			))}
		</div>
	);
}
