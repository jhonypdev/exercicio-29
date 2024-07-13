<!-- @format -->

# Componente Image

O componente `Image` é um componente reutilizável para exibir imagens na sua aplicação, permitindo adicionar classes CSS adicionais e outras propriedades.

## Uso

```javascript
import Image from "./Image";

const App = () => {
	const deal = {
		image: "path/to/image.jpg",
		title: "Oferta da Semana",
	};

	return (
		<div>
			<Image
				src={deal.image}
				alt={deal.title}
				className="rounded-lg shadow-lg"
			/>
		</div>
	);
};

export default App;
```
