<!-- @format -->

# Componente Container

O componente `Container` é um contêiner reutilizável que centraliza o conteúdo e aplica padding horizontal. Ele é estilizado utilizando classes do Tailwind CSS.

## Uso

```javascript
import Container from "./Container";

const App = () => {
	return (
		<Container className="my-8">
			<h1 className="text-2xl font-bold">Título do Conteúdo</h1>
			<p className="mt-4">Este é um exemplo de conteúdo dentro do contêiner.</p>
		</Container>
	);
};

export default App;
```
