import { Select } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import filterSlice from './filterSlice';
import MenuFilter from './MenuFilter';

export default function Filter() {
	const [option, setOption] = useState('auto');
	const dispatch = useDispatch();

	const handleChangeOption = (value) => {
		setOption(value);
		dispatch(filterSlice.actions.setSort(value));
	};
	return (
		//
		<div>
			<p className="mb-1">Sắp xếp theo giá</p>
			<Select
				defaultValue="auto"
				className="w-full"
				style={{ fontSize: '18px' }}
				value={option}
				onChange={handleChangeOption}
				options={[
					{
						value: 'auto',
						label: 'Tự động',
					},
					{
						value: 'asc',
						label: 'Giá: Tăng dần',
					},
					{
						value: 'desc',
						label: 'Giá: Giảm dần',
					},
				]}
			/>
			<MenuFilter />
		</div>
	);
}
