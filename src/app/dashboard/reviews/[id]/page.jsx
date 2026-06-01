import { getThisReview } from "@/lib/apiFunctions";
import ClientReviewUpdateForm from "@/UI/ClientReviewUpdateForm";

const EditClientReviewPage = async ({ params }) => {
	const { id } = await params;
	const review = await getThisReview(id);

	return (
		<div className="max-w-5xl mx-auto">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-3xl md:text-4xl font-bold text-white">
					Edit Client Review
				</h1>

				<p className="text-slate-400 mt-2">
					Update your portfolio information and showcase your latest work.
				</p>
			</div>

			{/* Form Card */}
			<div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
				<ClientReviewUpdateForm review={review}></ClientReviewUpdateForm>
			</div>
		</div>
	);
};

export default EditClientReviewPage;
