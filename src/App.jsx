import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route
							path="collections/best-seller"
							element={<CollectionPage />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
			<ToastContainer stacked={true} theme="light" position="bottom-left" />
		</>
	);
}

export default App;
