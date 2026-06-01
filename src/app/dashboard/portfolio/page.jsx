import { getAllPortfolios } from "@/lib/apiFunctions";
import PortfolioDeleteAlertDialog from "@/UI/PortfolioDeleteAlertDialog";
import Image from "next/image";
import Link from "next/link";
import { FiEdit2, FiFolder } from "react-icons/fi";

const AllPortfolioPage = async () => {
	const portfolios = await getAllPortfolios();

	return (
		<div className="max-w-7xl mx-auto">
			{/* Header */}
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
				<div>
					<h1 className="text-3xl md:text-4xl font-bold text-white">
						All Portfolio
					</h1>

					<p className="text-slate-400 mt-2">
						Manage all portfolio projects and creative works.
					</p>
				</div>

				<div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
					<p className="text-slate-400 text-sm">Total Portfolio</p>

					<h3 className="text-2xl font-bold text-white">
						{portfolios.length}
					</h3>
				</div>
			</div>

			{/* Portfolio Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
				{portfolios.map((portfolio) => (
					<div
						key={portfolio._id}
						className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
					>
						{/* Image */}
						<div className="relative h-56 w-full">
							<Image
								src={portfolio.image}
								alt={portfolio.title}
								width={1000}
								height={1000}
								className="object-cover h-56 w-full"
							/>
						</div>

						{/* Content */}
						<div className="p-5">
							<div className="flex items-center justify-between gap-3">
								<h3 className="text-lg font-semibold text-white line-clamp-1">
									{portfolio.title}
								</h3>

								<span className="shrink-0 text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
									{portfolio.category}
								</span>
							</div>

							{/* Buttons */}
							<div className="grid grid-cols-2 gap-3 mt-6">
								<Link
									href={`/dashboard/portfolio/${portfolio._id}`}
									className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 py-3 text-white font-medium transition-all"
								>
									<FiEdit2 />
									Edit
								</Link>

								<PortfolioDeleteAlertDialog
									portfolio={portfolio}
								></PortfolioDeleteAlertDialog>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Empty State */}
			{portfolios.length === 0 && (
				<div className="mt-16 rounded-3xl border border-dashed border-white/10 bg-white/5 p-16 text-center">
					<FiFolder size={50} className="mx-auto text-slate-500" />

					<h3 className="mt-5 text-2xl font-semibold text-white">
						No Portfolio Found
					</h3>

					<p className="mt-2 text-slate-400">
						Start by adding your first portfolio project.
					</p>
				</div>
			)}
		</div>
	);
};

export default AllPortfolioPage;
