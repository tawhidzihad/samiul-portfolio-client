"use client";

import { editThisClientReview } from "@/lib/apiFunctions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiSave } from "react-icons/fi";
const clientRatings = [1, 2, 3, 4, 5];

const ClientReviewUpdateForm = ({ review }) => {
	const router = useRouter();

	const handleUpdatedClientReview = async (e) => {
		e.preventDefault();
		const fromData = new FormData(e.currentTarget);
		const updatedClientReview = Object.fromEntries(fromData.entries());
		const data = await editThisClientReview(review?._id, updatedClientReview);

		if (data.modifiedCount) {
			toast.success("Client Review data updated successfully");
			router.push("/dashboard/reviews");
		}
	};

	return (
		<>
			<form className="space-y-6" onSubmit={handleUpdatedClientReview}>
				{/* Client Name */}
				<div>
					<label className="block text-sm font-medium text-slate-300 mb-2">
						Client Name <span className="text-red-500">*</span>
					</label>

					<input
						name="name"
						required
						type="text"
						defaultValue={review.name}
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
						defaultValue={review.role}
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
						defaultValue={review.rating}
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
						defaultValue={review.image}
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
						defaultValue={review.review}
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
						Update Client Review
					</button>
				</div>
			</form>
		</>
	);
};

export default ClientReviewUpdateForm;
