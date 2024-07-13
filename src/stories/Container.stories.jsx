/** @format */

import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import TimerItem from "../components/TimerItem/TimerItem";

export default {
	title: "Components/Container",
	component: Container,
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
	className: "flex flex-col items-center",
	children: (
		<>
			<div className="flex gap-4">
				<TimerItem timer={5} timerUni="Dias" />
				<TimerItem timer={12} timerUni="Horas" />
				<TimerItem timer={30} timerUni="Minutos" />
			</div>
			<Button variant="dark" className="mt-6 max-w-fit">
				Add to cart
			</Button>
		</>
	),
};
