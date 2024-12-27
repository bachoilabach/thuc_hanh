import { useId } from "react";

export default function Child() {
	console.log('child');
    const id = useId()
	return (
		<>
			<h3>Form</h3>
			<label htmlFor={id}>Name</label>
			<input type="text" name="name" id={id} />
		</>
	);
}
