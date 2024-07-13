/** @format */

import TimerItem from "../components/TimerItem/TimerItem";

export default {
	title: "Components/TimerItem",
	component: TimerItem,
};

const Template = (args) => <TimerItem {...args} />;

export const ExampleWithDays = Template.bind({});
ExampleWithDays.args = {
	timer: 5,
	timerUni: "Dias",
};

export const ExampleWithHours = Template.bind({});
ExampleWithHours.args = {
	timer: 12,
	timerUni: "Horas",
};

export const ExampleWithSeconds = Template.bind({});
ExampleWithSeconds.args = {
	timer: 30,
	timerUni: "Segundos",
};
