/** @format */

import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Products = ({ addToCart }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<Container className="mt-12" id="products">
			<div className="after mb-3">
				<h2 className="text-3xl uppercase font-semibold after">Destaques</h2>
			</div>

			<div className="flex gap-4 py-6 px-5 overflow-x-auto no-scrollbar">
				{products.map((product) => (
					<CardItem key={product.id} product={product} addToCart={addToCart} />
				))}
			</div>
		</Container>
	);
};

export default Products;
