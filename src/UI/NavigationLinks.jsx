import Link from "next/link";

const NavigationLinks = ({ href, children, className }) => {
	return (
		<li className={`relative group ${className}`}>
			<Link
				href={href}
				className="relative inline-flex items-center justify-center px-1 py-2 text-sm md:text-base font-medium text-slate-300 transition-all duration-300 hover:text-white"
			>
				{/* Text */}
				<span className="relative font-normal z-10">{children}</span>

				{/* Bottom Line */}
				<span className="absolute left-0 bottom-1 h-0.5 w-0 bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />

				{/* Glow Effect */}
				<span className="absolute inset-0 rounded-lg bg-blue-500/10 opacity-0 blur-md transition-all duration-300 group-hover:opacity-100" />
			</Link>
		</li>
	);
};

export default NavigationLinks;
