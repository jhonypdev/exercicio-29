/** @format */

import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import LogoContainer from "./Logo";
import NavUser from "./NavUser";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

const NavStore = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const toggleShow = () => setShow((s) => !s);
	return (
		<Navbar expand={"sm"}>
			<Container fluid className="flex-nowrap">
				<Button
					className="bg-transparent text-slate-500 border border-slate-400 hover:text-slate-400"
					onClick={toggleShow}>
					<BiMenu />
				</Button>
				<LogoContainer />
				<NavUser />
				<Navbar.Offcanvas aria-labelledby={`offcanvasNavbarLabel-expand-sm`}>
					<Offcanvas.Header>
						<LogoContainer />
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-end pe-3">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#home">Shop</Nav.Link>
							<Nav.Link href="#home">Contacts</Nav.Link>
							<Nav.Link href="#home">Promotions</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default NavStore;
