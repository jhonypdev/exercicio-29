import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return { products };
};

export default useProducts;
