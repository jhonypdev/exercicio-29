/** @format */

import { Container } from "react-bootstrap";
import NavStore from "./NavStore";

const Header = () => {
	return (
		<header
			id="hg_300"
			className=" py-3 top-0 left-0 w-full bg-white z-10 shadow-sm">
			<Container fluid>
				<NavStore />
			</Container>
		</header>
	);
};

export default Header;
