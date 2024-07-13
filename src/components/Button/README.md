<!-- @format -->

# Componente Button

O componente `Button` é um botão reutilizável e estilizado para ser usado na sua aplicação, com suporte para diferentes variações de estilo utilizando classes do Tailwind CSS. Ele também suporta eventos como `onClick`, `onChange`, entre outros.

## Uso

```javascript
import Button from "./Button";

const App = () => {
	const handleClick = () => {
		alert("Button clicked!");
	};

	return (
		<div className="space-y-4">
			<Button variant="default" onClick={handleClick}>
				Compre Agora
			</Button>
			<Button variant="destructive" onClick={handleClick}>
				Excluir
			</Button>
			<Button variant="outline" onClick={handleClick}>
				Saiba Mais
			</Button>
			<Button variant="dark" onClick={handleClick}>
				Configurações
			</Button>
		</div>
	);
};

export default App;
```
