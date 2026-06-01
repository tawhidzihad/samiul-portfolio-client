"use client";

import { editThisPortfolio } from "@/lib/apiFunctions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiSave } from "react-icons/fi";

const categories = [
	"YouTube SEO",
	"Thumbnail Design",
	"Video Editing",
	"Facebook Ads",
	"Google Ads",
	"YouTube Watch Time & Monetization",
];

const PortfolioUpdateForm = ({ singlePortfolio }) => {
	const router = useRouter();

	const handleUpdatedPortfolio = async (e) => {
		e.preventDefault();
		const fromData = new FormData(e.currentTarget);
		const portfolioUpdatedData = Object.fromEntries(fromData.entries());
		const data = await editThisPortfolio(
			singlePortfolio?._id,
			portfolioUpdatedData,
		);

		if (data.modifiedCount) {
			toast.success("Portfolio data updated successfully");
			router.push("/dashboard/portfolio");
		}
	};

	return (
		<>
			<form className="space-y-6" onSubmit={handleUpdatedPortfolio}>
				{/* Title */}
				<div>
					<label className="block text-sm font-medium text-slate-300 mb-2">
						Portfolio Title <span className="text-red-500">*</span>
					</label>

					<input
						name="title"
						required
						type="text"
						defaultValue={singlePortfolio.title}
						className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
					/>
				</div>

				{/* Category */}
				<div>
					<label className="block text-sm font-medium text-slate-300 mb-2">
						Category <span className="text-red-500">*</span>
					</label>

					<select
						defaultValue={singlePortfolio.category}
						name="category"
						required
						className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
					>
						<option value="">Select Category</option>

						{categories.map((category) => (
							<option
								key={category}
								value={category}
								className="bg-blue-950"
							>
								{category}
							</option>
						))}
					</select>
				</div>

				{/* Image Upload */}
				<div>
					<label className="block text-sm font-medium text-slate-300 mb-2">
						Portfolio Image Link <span className="text-red-500">*</span>
					</label>

					<input
						name="image"
						required
						type="url"
						className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300"
						defaultValue={singlePortfolio.image}
					/>
				</div>

				{/* Description */}
				<div>
					<label className="block text-sm font-medium text-slate-300 mb-2">
						Description <span className="text-red-500">*</span>
					</label>

					<textarea
						name="description"
						required
						rows={5}
						defaultValue={singlePortfolio.description}
						className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500 resize-none"
					/>
				</div>

				{/* Buttons */}
				<div className="flex justify-center items-center">
					<button
						type="submit"
						className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 py-3 font-medium text-white transition-all"
					>
						<FiSave />
						Update Portfolio
					</button>
				</div>
			</form>
		</>
	);
};

export default PortfolioUpdateForm;
