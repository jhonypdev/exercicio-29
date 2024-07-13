/** @format */

import Image from "../components/Image/Image";
import Container from "../components/Container/Container";

export default {
	title: "Components/Image",
	component: Image,
};

const Template = (args) => (
	<Container className="flex justify-center items-center h-screen">
		<Image {...args} />
	</Container>
);

export const Default = Template.bind({});

Default.args = {
	src: "https://via.placeholder.com/150",
	alt: "Placeholder Image",
	className: "h-40 w-40 rounded-full",
};
