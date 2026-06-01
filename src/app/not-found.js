import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
	return (
		<div className="min-h-screen bg-blue-950 dark:bg-black flex items-center justify-center px-4">
			{/* Background Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 blur-[150px] rounded-full" />

			<div className="relative text-center max-w-xl w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">
				<h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
					404
				</h1>

				<h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
					Page Not Found
				</h2>

				<p className="mt-4 text-slate-400 leading-relaxed">
					The page you&apos;re looking for doesn&apos;t exist or may have
					been moved.
				</p>

				<Link
					href="/"
					className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-blue-600 text-white font-medium transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] active:scale-95"
				>
					<FiArrowLeft />
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
