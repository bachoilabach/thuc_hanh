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
			{
				label: 'den',
				value: 'black',
			},
			{
				label: 'xanh',
				value: 'green',
			},
			{
				label: 'hong',
				value: 'pink',
			},
		],
	},
	{ id: 'gender', title: 'Giới tính', type: 'radio', options: ['Nam', 'Nữ'] },
];

export default function MenuFilter() {
	const [expanded, setExpanded] = useState({});
    const dispatch = useDispatch()
    // eslint-disable-next-line no-unused-vars
    const [color,setColor] = useState('')
	const contentRefs = useRef({});

    const handleChangeColor = (value) => {
        setColor(value)
        dispatch(filterSlice.actions.setColor(value))
    }
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

						<img src={expanded[item.id] ? minusIcon : plusIcon} />
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
							<div className="grid grid-cols-6 gap-5">
								{item.type === 'circle' &&
									item.options.map((option, index) => (
										<Tooltip
											className="hover:cursor-pointer"
											placement="bottom"
											title={option.label}
                                            onClick={()=>handleChangeColor(option.label)}
											key={index}>
											<span
												className="w-10 min-h-10 rounded-full border border-gray-400 inline-block"
												style={{ backgroundColor: option.value }}
											/>
										</Tooltip>
									))}
							</div>

							{item.type === 'radio' &&
								item.options.map((option, index) => (
									<div key={index} className="flex items-center space-x-2">
										<input
											type="radio"
											id={`${item.id}-${option}`}
											name={item.id}
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
					</div>

					<div className="border-t w-full my-3 border-black" />
				</div>
			))}
		</div>
	);
}
