/** @format */

import BenefitItem from "./BenefitItem";
import { Container } from "react-bootstrap";
import { FaTruck, FaUndo, FaMoneyBill, FaRegClock } from "react-icons/fa";

const Benefits = () => {
	return (
		<div className="mt-28">
			<Container className="w-full">
				<div className="md:flex w-full justify-center items-center px-4">
					<BenefitItem
						icon={<FaTruck className="text-3xl text-[#fe4c50]" />}
						title="Free Shipping"
						description="Suffered Alteration is Some Form"
					/>
					<BenefitItem
						icon={<FaUndo className="text-3xl text-[#fe4c50]" />}
						title="45 days return"
						description="Making it Look like Readable"
					/>
					<BenefitItem
						icon={<FaMoneyBill className="text-3xl text-[#fe4c50]" />}
						title="Cash on Delivery"
						description="The Internet tend To Repeat"
					/>
					<BenefitItem
						icon={<FaRegClock className="text-3xl text-[#fe4c50]" />}
						title="Opening All Week"
						description="8AM - 9PM"
					/>
				</div>
			</Container>
		</div>
	);
};

export default Benefits;
