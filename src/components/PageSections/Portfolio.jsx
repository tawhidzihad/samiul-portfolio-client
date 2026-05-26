"use client";

import { Chip } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
	FiArrowUpRight,
	FiChevronLeft,
	FiChevronRight,
	FiX,
} from "react-icons/fi";

const categories = ["All", "YouTube SEO", "Thumbnail Design", "Video Editing"];

const portfolioItems = [
	{
		id: 1,
		title: "YouTube SEO Growth",
		category: "YouTube SEO",
		image: "/images/workproof/seo-1.jpg",
		description:
			"Boosted channel impressions, CTR and organic reach through advanced SEO optimization.",
	},

	{
		id: 2,
		title: "Gaming Thumbnail",
		category: "Thumbnail Design",
		image: "/images/workproof/seo-2.jpg",
		description:
			"High-converting thumbnail design with strong CTR optimization.",
	},

	{
		id: 3,
		title: "Cinematic Video Editing",
		category: "Video Editing",
		image: "/images/workproof/seo-3.jpg",
		description:
			"Professional cinematic editing with smooth transitions and storytelling.",
	},

	{
		id: 4,
		title: "Monetization Proof",
		category: "YouTube SEO",
		image: "/images/workproof/seo-4.jpg",
		description:
			"Helped creators reach monetization goals using SEO strategy.",
	},

	{
		id: 5,
		title: "Modern Thumbnail Design",
		category: "Thumbnail Design",
		image: "/images/workproof/seo-5.jpg",
		description: "Modern eye-catching thumbnail optimized for better clicks.",
	},

	{
		id: 6,
		title: "YouTube Shorts Editing",
		category: "Video Editing",
		image: "/images/workproof/seo-1.jpg",
		description:
			"Engaging shorts editing with captions and viral style pacing.",
	},
];

const Portfolio = () => {
	const [activeCategory, setActiveCategory] = useState("All");
	const [selectedIndex, setSelectedIndex] = useState(null);

	const filteredItems =
		activeCategory === "All"
			? portfolioItems
			: portfolioItems.filter((item) => item.category === activeCategory);

	const handlePrev = () => {
		setSelectedIndex((prev) =>
			prev === 0 ? filteredItems.length - 1 : prev - 1,
		);
	};

	const handleNext = () => {
		setSelectedIndex((prev) =>
			prev === filteredItems.length - 1 ? 0 : prev + 1,
		);
	};

	return (
		<section
			id="portfolio"
			className="relative overflow-hidden bg-blue-950 dark:bg-black pt-10 md:pt-20 pb-15"
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-0">
				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center max-w-3xl mx-auto"
				>
					<p className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-4">
						PORTFOLIO
					</p>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
						Featured{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-800">
							Creative Results
						</span>
					</h1>

					<p className="text-muted mt-6 text-lg leading-relaxed">
						Explore my YouTube SEO growth results, high-converting
						thumbnail designs, and professional video editing projects
						crafted to help creators and brands grow faster online.
					</p>
				</motion.div>

				{/* Filters */}
				<div className="flex flex-wrap justify-center gap-4 mt-14">
					{categories.map((category, index) => (
						<button
							key={index}
							onClick={() => setActiveCategory(category)}
							className={`px-6 py-3 rounded-xl border text-sm font-medium transition-all duration-300
								${
									activeCategory === category
										? "bg-blue-600 border-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)]"
										: "bg-white/5 border-white/10 text-slate-300 hover:border-blue-500/40 hover:text-white"
								}
							`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Gallery */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
					{filteredItems.map((item, index) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: index * 0.08,
							}}
							viewport={{ once: true }}
							onClick={() => setSelectedIndex(index)}
							className="group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300"
						>
							<div className="relative h-65 overflow-hidden">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>

								<div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

								<div className="absolute top-3 left-3">
									<Chip className="bg-blue-600/90 text-white text-xs font-normal">
										{item.category}
									</Chip>
								</div>
							</div>

							<div className="py-2 flex flex-col justify-center items-center gap-3">
								<h2 className="text-2xl font-semibold text-white">
									{item.title}
								</h2>
								<button className="text-blue-400 font-medium hover:text-white transition-colors duration-300">
									Click to View
								</button>
							</div>
						</motion.div>
					))}
				</div>

				{/* View All Cretive Works Button */}
				<div className="flex justify-center mt-16">
					<Link
						href="/portfolio"
						className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-blue-500/20 bg-white/5 backdrop-blur-xl px-8 py-4 text-white font-medium transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] hover:scale-105"
					>
						{/* Glow */}
						<span className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

						{/* Shine Effect */}
						<span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/10 blur-md transition-all duration-700 group-hover:left-[120%]" />

						<span className="relative flex items-center gap-3">
							View All Cretive Works
							<span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 group-hover:bg-white transition-all duration-300">
								<FiArrowUpRight className="text-white group-hover:text-blue-600 transition-colors duration-300" />
							</span>
						</span>
					</Link>
				</div>
			</div>

			{/* Modal */}
			<AnimatePresence>
				{selectedIndex !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
					>
						{/* Close */}
						<button
							onClick={() => setSelectedIndex(null)}
							className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300"
						>
							<FiX size={24} />
						</button>

						{/* Prev */}
						<button
							onClick={handlePrev}
							className="absolute left-4 md:left-10 w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
						>
							<FiChevronLeft size={24} />
						</button>

						{/* Next */}
						<button
							onClick={handleNext}
							className="absolute right-4 md:right-10 w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
						>
							<FiChevronRight size={24} />
						</button>

						{/* Content */}
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="max-w-5xl w-full"
						>
							<div className="relative w-full h-75 sm:h-112.5 md:h-150 rounded overflow-hidden border border-white/10">
								<Image
									src={filteredItems[selectedIndex].image}
									alt={filteredItems[selectedIndex].title}
									fill
									className="object-cover"
								/>
							</div>

							<div className="mt-6 text-center">
								<h2 className="text-3xl font-bold text-white">
									{filteredItems[selectedIndex].title}
								</h2>

								<p className="text-slate-400 mt-2 max-w-2xl mx-auto leading-relaxed">
									{filteredItems[selectedIndex].description}
								</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Portfolio;
