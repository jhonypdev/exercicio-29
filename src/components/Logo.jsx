/** @format */
import "bootstrap/dist/css/bootstrap.css";
import { Container, NavbarBrand } from "react-bootstrap";

const LogoContainer = () => {
	return (
		<Container>
			<NavbarBrand className="text-gray-950 font-bold">
				JP <span className="text-[#fe4c50]">Store</span>
			</NavbarBrand>
		</Container>
	);
};

export default LogoContainer;
