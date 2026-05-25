import Link from "next/link";

const NavigationLinks = ({ href, children, className }) => {
	return (
		<li className={className}>
			<Link
				href={href}
				className={`hover:border-b-2 border-indigo-950 transition-all duration-100 ease-in-out active:border-b-2 active:border-amber-400`}
			>
				{children}
			</Link>
		</li>
	);
};

export default NavigationLinks;
