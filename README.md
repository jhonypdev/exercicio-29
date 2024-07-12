# Componente Button

O componente `Button` é um botão reutilizável e estilizado para ser usado na sua aplicação, com suporte para diferentes variações de estilo.

## Uso

```javascript
import Button from "./Button";

const App = () => {
  return (
    <div>
      <Button variant="default">Compre Agora</Button>
      <Button variant="destructive">Excluir</Button>
      <Button variant="outline">Saiba Mais</Button>
      <Button variant="dark">Configurações</Button>
    </div>
  );
};

export default App;
```

# useProducts Hook

`useProducts` é um hook customizado em React que facilita a busca de produtos a partir de uma API. Este hook pode ser reutilizado em qualquer componente para obter a lista de produtos.

## Instalação

1. Certifique-se de que seu projeto está configurado com React.
2. Adicione o arquivo `useProducts.js` ao seu projeto.

### Exemplo de `useProducts.js`

```javascript
import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return { products };
};

export default useProducts;
```
