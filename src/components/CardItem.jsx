/** @format */

import { Button, Card } from "react-bootstrap";

const CardItem = ({ product, addToCart }) => {
	return (
		<Card className="min-w-56 ">
			<Card.Img src={product.image} className="min-h-48 max-h-52 object-contain p-1" />
			<Card.Body>
				<Card.Title>{product.title}</Card.Title>
				<p>R$ {product.price}</p>
				<Button variant="dark" onClick={() => addToCart(product)}>
					Adicionar ao carrinho
				</Button>
			</Card.Body>
		</Card>
	);
};

export default CardItem;
