"use client";

import { addNewPortfolio } from "@/lib/apiFunctions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const categories = [
	"YouTube SEO",
	"Thumbnail Design",
	"Video Editing",
	"Facebook Ads",
	"Google Ads",
	"YouTube Watch Time & Monetization",
];

const AddPortfolioPage = () => {
	const router = useRouter();

	const handleAddPortfolioForm = async (e) => {
		e.preventDefault();
		const fromData = new FormData(e.currentTarget);
		const portfolioData = Object.fromEntries(fromData.entries());
		const data = await addNewPortfolio(portfolioData);

		if (data.insertedId) {
			toast.success("New Portfolio Added");
			router.push("/dashboard/portfolio");
		}
	};

	return (
		<div className="max-w-5xl mx-auto">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-3xl md:text-4xl font-bold text-white">
					Add Portfolio
				</h1>

				<p className="text-slate-400 mt-2">
					Add a new portfolio project to showcase your work.
				</p>
			</div>

			{/* Form Card */}
			<div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
				<form className="space-y-6" onSubmit={handleAddPortfolioForm}>
					{/* Title */}
					<div>
						<label className="block text-sm font-medium text-slate-300 mb-2">
							Portfolio Title <span className="text-red-500">*</span>
						</label>

						<input
							name="title"
							required
							type="text"
							placeholder="Write portfolio title"
							className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
						/>
					</div>

					{/* Category */}
					<div>
						<label className="block text-sm font-medium text-slate-300 mb-2">
							Category <span className="text-red-500">*</span>
						</label>

						<select
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
							Portfolio Image Link{" "}
							<span className="text-red-500">*</span>
						</label>

						<input
							name="image"
							required
							type="url"
							className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300"
							placeholder="https://image-link.com"
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
							placeholder="Write about portfolio..."
							className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500 resize-none"
						/>
					</div>

					{/* Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 pt-4">
						<button
							type="submit"
							className="flex-1 rounded-xl bg-blue-600 hover:bg-blue-500 py-3 font-medium text-white transition-all duration-300"
						>
							Add Portfolio
						</button>

						<button
							type="reset"
							className="flex-1 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 py-3 font-medium text-white transition-all duration-300"
						>
							Clear Form
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddPortfolioPage;
