"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
	FiBarChart2,
	FiImage,
	FiMonitor,
	FiShoppingBag,
	FiTarget,
	FiTrendingUp,
	FiVideo,
	FiX,
	FiYoutube,
} from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";

const services = [
	{
		title: "YouTube SEO",
		icon: FiYoutube,
		description:
			"Optimize videos and channels for higher rankings and organic growth.",

		fullTitle: "Professional YouTube SEO Optimization",

		details:
			"I help creators improve video rankings, increase impressions, boost click-through rates (CTR), and grow organically through advanced YouTube SEO strategies.",

		features: [
			"Keyword Research",
			"Video SEO Optimization",
			"Channel SEO Setup",
			"Competitor Analysis",
			"CTR Improvement Strategy",
			"Organic Growth Planning",
		],
	},

	{
		title: "YouTube Monetization",
		icon: FiTrendingUp,
		description:
			"Monetization strategy, watch time growth, and channel optimization.",

		fullTitle: "YouTube Monetization & Growth Strategy",

		details:
			"Helping creators reach monetization requirements faster through strategic content optimization and audience growth techniques.",

		features: [
			"Watch Time Strategy",
			"Subscriber Growth",
			"Monetization Roadmap",
			"Channel Audit",
			"Growth Consulting",
		],
	},

	{
		title: "Video Editing",
		icon: FiVideo,
		description:
			"Professional editing with storytelling and retention-focused cuts.",

		fullTitle: "Professional Video Editing Service",

		details:
			"High-quality video editing designed to increase audience retention and engagement while maintaining a professional brand image.",

		features: [
			"Cinematic Editing",
			"Short Form Content",
			"Transitions & Effects",
			"Motion Graphics",
			"Color Correction",
		],
	},

	{
		title: "Thumbnail Design",
		icon: FiImage,
		description: "High CTR thumbnail designs that increase clicks.",

		fullTitle: "High Converting Thumbnail Design",

		details:
			"Custom thumbnails designed to improve click-through rates and make your content stand out from competitors.",

		features: [
			"CTR Focused Design",
			"Custom Graphics",
			"Brand Consistency",
			"Gaming Thumbnails",
			"Business Thumbnails",
		],
	},

	{
		title: "Google Ads",
		icon: FiTarget,
		description: "Generate leads and conversions through Google Ads.",

		fullTitle: "Google Ads Campaign Management",

		details:
			"Create and manage high-performing Google Ads campaigns that drive targeted traffic, leads, and sales.",

		features: [
			"Search Ads",
			"Display Ads",
			"Keyword Targeting",
			"Conversion Tracking",
			"Performance Optimization",
		],
	},

	{
		title: "Facebook Ads",
		icon: FiBarChart2,
		description: "Facebook & Instagram ad campaigns for maximum ROI.",

		fullTitle: "Facebook & Instagram Advertising",

		details:
			"Targeted advertising campaigns designed to maximize reach, engagement, and conversions.",

		features: [
			"Audience Research",
			"Ad Creative Strategy",
			"Lead Generation",
			"Retargeting",
			"ROI Optimization",
		],
	},

	{
		title: "Social Media Management",
		icon: FiMonitor,
		description: "Content planning and audience engagement strategies.",

		fullTitle: "Social Media Management Service",

		details:
			"Complete social media management including content planning, posting, branding, and audience engagement.",

		features: [
			"Content Planning",
			"Page Management",
			"Audience Engagement",
			"Growth Strategy",
			"Brand Development",
		],
	},

	{
		title: "Shopify Design",
		icon: FiShoppingBag,
		description: "Modern Shopify store design for better conversions.",

		fullTitle: "Shopify Store Design & Optimization",

		details:
			"Professional Shopify store design focused on user experience, trust building, and sales conversions.",

		features: [
			"Custom Store Design",
			"Responsive Layout",
			"Conversion Optimization",
			"Landing Pages",
			"Speed Optimization",
		],
	},
];

const Services = () => {
	const [selectedService, setSelectedService] = useState(null);

	return (
		<section
			id="services"
			className="relative overflow-hidden bg-blue-950 dark:bg-black pt-10 pb-15"
		>
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
						SERVICES
					</p>

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
						My
						<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
							{" "}
							Professional Services
						</span>
					</h2>

					<p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto">
						I help creators, brands, and businesses grow faster with
						data-driven marketing, content optimization, and high-quality
						creative services.
					</p>
				</motion.div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
					{services.map((service, index) => {
						const Icon = service.icon;

						return (
							<motion.div
								onClick={() => setSelectedService(service)}
								key={service.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
								}}
								className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
							>
								{/* Hover Glow */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-blue-500/10 to-transparent" />

								<div className="relative">
									<div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/20 flex items-center justify-center mb-6">
										<Icon size={30} className="text-blue-400" />
									</div>

									<h3 className="text-2xl font-bold text-white mb-4">
										{service.title}
									</h3>

									<p className="text-slate-400 leading-relaxed">
										{service.description}
									</p>

									<button
										onClick={() => setSelectedService(service)}
										className="mt-6 text-blue-400 font-medium hover:text-white transition-colors"
									>
										Learn More →
									</button>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Modal */}
				<AnimatePresence>
					{selectedService && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-999 backdrop-blur-md flex items-center justify-center p-4"
							onClick={() => setSelectedService(null)}
						>
							<motion.div
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.9, opacity: 0 }}
								onClick={(e) => e.stopPropagation()}
								className="relative max-w-2xl w-full rounded-3xl border border-white/10 bg-blue-950 p-8"
							>
								{/* Close Button */}
								<button
									onClick={() => setSelectedService(null)}
									className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center transition-all duration-300 hover:bg-red-500 hover:border-red-500 hover:text-white active:scale-95"
								>
									<FiX size={22} />
								</button>

								<h2 className="text-3xl font-bold text-white">
									{selectedService.fullTitle}
								</h2>

								<p className="text-slate-400 mt-4 leading-relaxed">
									{selectedService.details}
								</p>

								<div className="mt-8">
									<h3 className="text-white font-semibold mb-4">
										What&apos;s Included:
									</h3>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
										{selectedService.features.map((feature) => (
											<div
												key={feature}
												className="rounded-xl bg-white/5 border border-white/10 p-3 text-slate-300 flex items-center gap-2"
											>
												<GiCheckMark /> {feature}
											</div>
										))}
									</div>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mt-20"
				>
					<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 text-center">
						{/* Glow Effect */}
						<div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[120px]" />

						<div className="relative z-10">
							<h3 className="text-3xl md:text-4xl font-bold text-white">
								Ready to Grow Your Brand or Channel?
							</h3>

							<p className="text-slate-400 mt-4 max-w-3xl mx-auto leading-relaxed">
								Whether you need YouTube SEO, Video Editing, Thumbnail
								Design, Social Media Management, or Digital Marketing,
								let&apos;s discuss your goals and find the best solution
								for your business.
							</p>

							<div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
								{/* Free Consultation */}
								<a
									href=""
									className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.45)] active:scale-95"
								>
									Book a Consultation
								</a>

								{/* WhatsApp */}
								<Link
									href="https://wa.me/+8801773070054"
									target="_blank"
									className="group inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-8 py-4 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-green-500 hover:bg-green-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.35)] active:scale-95"
								>
									<FaWhatsapp className="text-xl" />
									Chat on WhatsApp
								</Link>
							</div>

							<div className="flex justify-center items-center">
								<p className="text-slate-500 text-sm mt-6 flex items-center gap-2">
									Response usually within a hours{" "}
									<IoIosRocket className="h-5 w-auto" />
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
