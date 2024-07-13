/** @format */

import "./App.css";
import Header from "./components/Header";
import BannerHome from "./components/Banner";
import DealOfWeek from "./components/DealOfWeek";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Products from "./components/Products";
import { useState } from "react";

function App() {
	const [cartItems, setCartsItems] = useState([]);

	const addToCart = (product) => {
		setCartsItems([...cartItems, product]);
	};

	return (
		<div className="App">
			<Header cartItemsCount={cartItems.length} />
			<BannerHome />
			<DealOfWeek addToCart={addToCart} />
			<Products addToCart={addToCart} />
			<Benefits />
			<Footer />
			<ScrollTop />
		</div>
	);
}

export default App;
