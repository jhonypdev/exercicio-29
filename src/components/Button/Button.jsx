/** @format */

const buttonVariants = {
	default: "bg-red-500 text-white",
	destructive: "bg-red-700 text-white",
	outline: "bg-transparent text-red-500 border border-red-500",
	dark: "bg-gray-800 text-white",
};

const Button = ({
	children,
	variant = "default",
	className = "",
	...props
}) => {
	const buttonClass = `${buttonVariants[variant]} py-2 px-4 rounded text-base cursor-pointer hover:opacity-80 ${className}`;

	return (
		<button className={buttonClass} {...props}>
			{children}
		</button>
	);
};

export default Button;
