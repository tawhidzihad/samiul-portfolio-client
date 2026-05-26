import Link from "next/link";

const NavigationLinks = ({ href, children, className }) => {
	return (
		<li className={className}>
			<Link
				href={href}
				className={`hover:border-b-2 border-green-500 transition-all duration-100 ease-in-out active:border-b-2 active:border-white text-white`}
			>
				{children}
			</Link>
		</li>
	);
};

export default NavigationLinks;
