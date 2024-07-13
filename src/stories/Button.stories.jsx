/** @format */

import Button from "../components/Button/Button";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		onClick: { action: "clicked" },
		variant: {
			control: {
				type: "select",
				options: ["default", "destructive", "outline", "dark"],
			},
		},
	},
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: "Default Button",
	variant: "default",
};

export const Destructive = Template.bind({});
Destructive.args = {
	children: "Destructive Button",
	variant: "destructive",
};

export const Outline = Template.bind({});
Outline.args = {
	children: "Outline Button",
	variant: "outline",
};

export const Dark = Template.bind({});
Dark.args = {
	children: "Dark Button",
	variant: "dark",
};
