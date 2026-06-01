import { getThisPortfolio } from "@/lib/apiFunctions";
import PortfolioUpdateForm from "@/UI/PortfolioUpdateForm";

const EditPortfolioPage = async ({ params }) => {
	const { id } = await params;
	const singlePortfolio = await getThisPortfolio(id);

	return (
		<div className="max-w-5xl mx-auto">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-3xl md:text-4xl font-bold text-white">
					Edit Portfolio
				</h1>

				<p className="text-slate-400 mt-2">
					Update your portfolio information and showcase your latest work.
				</p>
			</div>

			{/* Form Card */}
			<div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
				<PortfolioUpdateForm
					singlePortfolio={singlePortfolio}
				></PortfolioUpdateForm>
			</div>
		</div>
	);
};

export default EditPortfolioPage;
