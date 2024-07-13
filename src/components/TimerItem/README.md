<!-- @format -->

## TimerItem Component

O `TimerItem` é um componente React utilizado para exibir um item de contagem regressiva com um valor numérico e sua unidade correspondente.

### Instalação

Não é necessário instalar nada adicional para usar este componente. Basta integrá-lo ao seu projeto React.

### Exemplo de Uso

```jsx
import React from "react";
import TimerItem from "./TimerItem";

const ExampleTimer = () => {
	return (
		<ul className="flex">
			<TimerItem timer={3} timerUni="Dias" />
			<TimerItem timer={12} timerUni="Horas" />
			<TimerItem timer={45} timerUni="min" />
			<TimerItem timer={30} timerUni="sec" />
		</ul>
	);
};

export default ExampleTimer;
```
