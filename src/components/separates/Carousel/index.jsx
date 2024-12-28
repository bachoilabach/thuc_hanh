import { Carousel } from "@material-tailwind/react";

export default function MyCarousel() {
	return (
		<Carousel
			transition={{ duration: 1 }}
			className="w-full max-h-screen overflow-hidden"
		>
			<img
				src="https://file.hstatic.net/1000184601/file/1440x840_pc__7_.jpg"
				alt="image 1"
				className="h-full w-full object-cover"
			/>
			<img
				src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
				alt="image 2"
				className="h-full w-full object-cover"
			/>
		</Carousel>
	);
}
