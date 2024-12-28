import { Outlet } from 'react-router-dom';
import Header from '../components/generals/Header';
import Footer from '../components/generals/Footer';

export default function MainLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
