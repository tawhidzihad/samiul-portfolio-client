"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const pricingPlans = [
	{
		name: "Starter",
		price: "$49",
		description: "Perfect for creators who are just getting started.",
		popular: false,
		features: [
			"YouTube SEO Optimization",
			"Keyword Research",
			"5 Thumbnail Designs",
			"Basic Competitor Analysis",
			"Email Support",
		],
	},

	{
		name: "Growth",
		price: "$149",
		description: "Best for growing channels and businesses.",
		popular: true,
		features: [
			"Advanced YouTube SEO",
			"10 Custom Thumbnails",
			"4 Video Optimizations",
			"CTR Optimization",
			"Competitor Research",
			"Priority Support",
		],
	},

	{
		name: "Premium",
		price: "$299",
		description: "Complete growth package for serious brands.",
		popular: false,
		features: [
			"Full Channel SEO",
			"Professional Video Editing",
			"Unlimited Thumbnails",
			"Social Media Management",
			"Growth Strategy",
			"Dedicated Support",
		],
	},
];

const Pricing = () => {
	return (
		<section
			id="pricing"
			className="relative overflow-hidden bg-blue-950 dark:bg-black py-20"
		>
			{/* Background Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-600/10 blur-[150px] rounded-full" />

			<div className="relative max-w-7xl mx-auto px-6 lg:px-0">
				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto"
				>
					<p className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-4">
						PRICING
					</p>

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
						Simple &
						<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
							{" "}
							Transparent Pricing
						</span>
					</h2>

					<p className="text-slate-400 mt-6 text-lg leading-relaxed">
						Choose the right package for your business, YouTube channel,
						or personal brand growth.
					</p>
				</motion.div>

				{/* Pricing Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
					{pricingPlans.map((plan, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.15,
							}}
							className={`relative rounded-3xl overflow-hidden border backdrop-blur-xl
								${
									plan.popular
										? "border-blue-500 bg-blue-500/10 shadow-[0_0_50px_rgba(59,130,246,0.25)] lg:scale-105"
										: "border-white/10 bg-white/5"
								}`}
						>
							{plan.popular && (
								<div className="absolute top-5 right-5">
									<span className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold">
										Most Popular
									</span>
								</div>
							)}

							<div className="p-8">
								<h3 className="text-2xl font-bold text-white">
									{plan.name}
								</h3>

								<p className="text-slate-400 mt-3">
									{plan.description}
								</p>

								<div className="mt-8">
									<span className="text-5xl font-black text-white">
										{plan.price}
									</span>

									<span className="text-slate-400 ml-2">/project</span>
								</div>

								<div className="h-px bg-white/10 my-8" />

								<ul className="space-y-4">
									{plan.features.map((feature, i) => (
										<li
											key={i}
											className="flex items-center gap-3 text-slate-300"
										>
											<FiCheck className="text-blue-500 shrink-0" />
											{feature}
										</li>
									))}
								</ul>

								<button className="group w-full mt-10 rounded-2xl bg-blue-600 hover:bg-blue-500 py-4 font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2">
									Book a Free Consultation
									<FiArrowRight className="group-hover:translate-x-1 transition-transform" />
								</button>
							</div>
						</motion.div>
					))}
				</div>

				{/* Custom Quote */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mt-20"
				>
					<div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
						<h3 className="text-3xl font-bold text-white">
							Need a Custom Package?
						</h3>

						<p className="text-slate-400 mt-4 max-w-2xl mx-auto">
							Every project is unique. If you need a custom SEO, video
							editing, social media, or marketing package, let&apos;s
							discuss your goals.
						</p>

						<button
							className="
							mt-8
							px-8
							py-4
							rounded-full
							bg-blue-600
							hover:bg-blue-500
							text-white
							font-medium
							transition-all
							duration-300
						"
						>
							Request Custom Quote
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Pricing;
