const Loading = () => {
	return (
		<div className="min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Glow */}
			<div className="absolute w-125 h-125 *:rounded-full bg-blue-600/10 blur-[150px]" />

			<div className="relative flex flex-col items-center">
				{/* Loader */}
				<div className="relative mt-10">
					<div className="w-16 h-16 rounded-full border-4 border-blue-500/20" />

					<div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 animate-spin" />
				</div>

				{/* Loading Text */}
				<p className="mt-6 text-slate-300 font-medium animate-pulse">
					Loading...
				</p>
			</div>
		</div>
	);
};

export default Loading;
