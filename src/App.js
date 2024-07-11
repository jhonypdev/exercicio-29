/** @format */

import "./App.css";
import Header from "./components/Header";
import BannerHome from "./components/Banner";
import DealOfWeek from "./components/DealOfWeek";
import Benefits from "./components/Benefits";

function App() {
	return (
		<div className="App">
			<Header />
			<BannerHome />
			<DealOfWeek />
			<Benefits />
		</div>
	);
}

export default App;
