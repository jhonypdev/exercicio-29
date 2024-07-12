/** @format */

import { Container } from "react-bootstrap";
import CardItem from "./CardItem";
import useProducts from "../hooks/useProducts";

const Products = ({ addToCart }) => {
  const { products } = useProducts();

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
