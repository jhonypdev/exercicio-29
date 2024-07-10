/** @format */
import { CiSearch, CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

import { Nav } from "react-bootstrap";

const NavUser = () => {
	return (
		<Nav className="justify-evenly flex-row items-center">
			<Nav.Item className="inline-block text-center">
				<Nav.Link
					href="#"
					className="flex items-center justify-center relative w-8 h-8 text-slate-900">
					<CiSearch />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item className="inline-block text-center ">
				<Nav.Link
					href="#"
					className="flex items-center justify-center relative w-8 h-8 text-slate-900 ">
					<CiUser />
				</Nav.Link>
			</Nav.Item>

			<Nav.Item className="inline-block text-center text-slate-400">
				<Nav.Link
					href="#"
					className="flex items-center justify-center relative w-8 h-8 text-slate-900 bg-[#eceff6] rounded-[100%]">
					<FaCartShopping />
					<span className="flex items-center justify-center absolute -top-2 -right-1 bg-[#fe4c50] rounded-[100%] w-4 h-4 text-xs text-white font-semibold">
						2
					</span>
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default NavUser;
