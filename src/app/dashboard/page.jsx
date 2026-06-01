export default function DashboardPage() {
	return (
		<div className="py-20">
			<div className="max-w-7xl m-auto">
				<h1 className="text-4xl font-bold text-white">
					SAMIUL TubeGrowth Studio Dashboard Overview
				</h1>

				<p className="text-slate-400 mt-3">
					Manage your portfolio projects and client reviews.
				</p>

				<div className="grid md:grid-cols-2 gap-6 mt-10">
					<div className="rounded-3xl border border-white/10 bg-white/5 p-8">
						<h3 className="text-white text-2xl font-semibold">
							Portfolio
						</h3>

						<p className="text-slate-400 mt-2">
							Add, edit, and manage portfolio items.
						</p>
					</div>

					<div className="rounded-3xl border border-white/10 bg-white/5 p-8">
						<h3 className="text-white text-2xl font-semibold">
							Client Reviews
						</h3>

						<p className="text-slate-400 mt-2">
							Manage testimonials and client feedback.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
