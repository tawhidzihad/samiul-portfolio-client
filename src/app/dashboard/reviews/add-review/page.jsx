"use client";

import { addNewClientReview } from "@/lib/apiFunctions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const clientRatings = [1, 2, 3, 4, 5];

const AddReview = () => {
	const router = useRouter();

	const handleAddPortfolioForm = async (e) => {
		e.preventDefault();
		const fromData = new FormData(e.currentTarget);
		const clientReviewData = Object.fromEntries(fromData.entries());
		const data = await addNewClientReview(clientReviewData);

		if (data.insertedId) {
			toast.success("New Client Review Added");
			router.push("/dashboard/reviews");
		}
	};

	return (
		<div className="max-w-5xl mx-auto">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-3xl md:text-4xl font-bold text-white">
					Add Client Success Story
				</h1>

				<p className="text-slate-400 mt-2">
					Showcase real results, client feedback, and successful
					collaborations to inspire future clients.
				</p>
			</div>

			{/* Form Card */}
			<div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
				<form className="space-y-6" onSubmit={handleAddPortfolioForm}>
					{/* Client Name */}
					<div>
						<label className="block text-sm font-medium text-slate-300 mb-2">
							Client Name <span className="text-red-500">*</span>
						</label>

						<input
							name="name"
							required
							type="text"
							placeholder="Write Client Name"
							className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
						/>
					</div>

					{/* Client Role */}
					<div>
						<label className="block text-sm font-medium text-slate-300 mb-2">
							Client Role <span className="text-red-500">*</span>
						</label>

						<input
							name="role"
							required
							type="text"
							placeholder="Write Client Role"
							className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
						/>
					</div>

					{/* Rating */}
					<div>
						<label className="block text-sm font-medium text-slate-300 mb-2">
							Client Rating <span className="text-red-500">*</span>
						</label>

						<select
							name="rating"
							required
							className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
						>
							<option value="">Select Rating</option>

							{clientRatings.map((category) => (
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

					{/* Client Image  */}
					<div>
						<label className="block text-sm font-medium text-slate-300 mb-2">
							Client Image Link <span className="text-red-500">*</span>
						</label>

						<input
							name="image"
							required
							type="url"
							className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300"
							placeholder="https://image-link.com"
						/>
					</div>

					{/* client review */}
					<div>
						<label className="block text-sm font-medium text-slate-300 mb-2">
							Client Review <span className="text-red-500">*</span>
						</label>

						<textarea
							name="review"
							required
							rows={5}
							placeholder="Write what your client says...."
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

export default AddReview;
