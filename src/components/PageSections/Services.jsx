"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
	FiBarChart2,
	FiImage,
	FiMonitor,
	FiShoppingBag,
	FiTarget,
	FiTrendingUp,
	FiVideo,
	FiYoutube,
} from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";

const services = [
	{
		title: "YouTube SEO",
		icon: FiYoutube,
		description:
			"Optimize videos and channels for higher rankings, impressions, and organic growth.",
	},

	{
		title: "YouTube Monetization",
		icon: FiTrendingUp,
		description:
			"Monetization strategy, watch time growth, subscriber growth, and channel optimization.",
	},

	{
		title: "Video Editing",
		icon: FiVideo,
		description:
			"Professional editing with engaging storytelling, smooth transitions, and retention-focused cuts.",
	},

	{
		title: "Thumbnail Design",
		icon: FiImage,
		description:
			"High CTR thumbnail designs that grab attention and increase clicks.",
	},

	{
		title: "Google Ads",
		icon: FiTarget,
		description:
			"Run high-performing Google Ads campaigns to generate leads and conversions.",
	},

	{
		title: "Facebook Ads",
		icon: FiBarChart2,
		description:
			"Targeted Facebook & Instagram ad campaigns for maximum ROI.",
	},

	{
		title: "Social Media Management",
		icon: FiMonitor,
		description:
			"Content planning, audience engagement, branding, and growth strategies.",
	},

	{
		title: "Shopify Design",
		icon: FiShoppingBag,
		description:
			"Modern Shopify store design optimized for conversions and user experience.",
	},
];

const Services = () => {
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

									<button className="mt-6 text-blue-400 font-medium hover:text-white transition-colors">
										Learn More →
									</button>
								</div>
							</motion.div>
						);
					})}
				</div>

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
