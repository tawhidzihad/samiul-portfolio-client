import { getAllClientReviews } from "@/lib/apiFunctions";
import ClientReviewDeleteAlertDialog from "@/UI/ClientReviewDeleteAlertDialog";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const AllReviewsPage = async () => {
	const reviews = await getAllClientReviews();

	return (
		<div className="max-w-7xl mx-auto">
			{/* Header */}
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
				<div>
					<h1 className="text-3xl md:text-4xl font-bold text-white">
						Client Success Stories
					</h1>

					<p className="text-slate-400 mt-2">
						Manage success stories, client experiences, and testimonials
						that showcase the impact of your services.
					</p>
				</div>

				<div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
					<p className="text-slate-400 text-sm">Total Reviews</p>

					<h3 className="text-2xl font-bold text-white">
						{reviews.length}
					</h3>
				</div>
			</div>

			{/* Portfolio Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
				{reviews.map((review) => (
					<div
						key={review._id}
						className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
					>
						{/* Image */}
						<div className="relative h-56 w-full">
							<Image
								src={review.image}
								alt={review.name}
								width={1000}
								height={1000}
								className="object-cover h-56 w-full"
							/>
						</div>

						{/* Content */}
						<div className="p-5">
							<div className="flex items-center justify-between gap-3">
								<h3 className="text-lg font-semibold text-white line-clamp-1">
									{review.name}
								</h3>

								<span className="shrink-0 text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-2">
									{review.rating}
									<FaStar className={"text-yellow-400"} />
								</span>
							</div>

							{/* Buttons */}
							<div className="grid grid-cols-2 gap-3 mt-6">
								<Link
									href={`/dashboard/reviews/${review._id}`}
									className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 py-3 text-white font-medium transition-all"
								>
									<FiEdit2 />
									Edit
								</Link>

								<ClientReviewDeleteAlertDialog
									review={review}
								></ClientReviewDeleteAlertDialog>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllReviewsPage;
