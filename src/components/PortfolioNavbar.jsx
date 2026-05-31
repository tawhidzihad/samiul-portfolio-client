"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const PortfolioNavbar = () => {
	return (
		<div className="sticky top-0 z-50 backdrop-blur-xl bg-blue-950/80 dark:bg-black/80 border-b border-white/10">
			<div className="max-w-7xl mx-auto py-4">
				<div className="flex items-center justify-between">
					{/* Back Button */}
					<Link
						href="/"
						className="group inline-flex items-center gap-2 text-white font-medium transition-all duration-300 hover:text-blue-400"
					>
						<FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
						Back to Home
					</Link>

					{/* CTA */}
					<Link
						href="/"
						className=" group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
					>
						Book a Consultation
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioNavbar;
