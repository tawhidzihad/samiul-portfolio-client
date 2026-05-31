"use client";

import TypeWriting from "@/UI/TypeWriting";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaAward, FaUsers } from "react-icons/fa";
import { FaHeadphonesSimple, FaRepeat } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";

const AboutMe = () => {
	return (
		<section
			id="about"
			className="bg-blue-950 dark:bg-black flex items-center overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-0 w-full pt-30 md:pt-40 pb-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-0 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="order-2 lg:order-1"
					>
						<div className="space-y-5">
							{/* Status */}
							<div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-1 rounded-full">
								<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
								<p className="text-green-500 text-xs tracking-wide">
									About Me
								</p>
							</div>

							{/* Main Text */}
							<div className="space-y-5">
								<h1 className="text-5xl md:text-5xl lg:text-7xl font-bold md:leading-18 text-white">
									Hey 👋 I&apos;m
									<span className="block text-transparent bg-clip-text bg-linear-to-r to-blue-400 from-cyan-500">
										Samiul Islam
									</span>
								</h1>

								<p className="text-slate-400 font-medium text-[16px] md:text-lg leading-relaxed max-w-xl">
									I&apos;m a Professional <TypeWriting /> <br />
									helping brands and creators grow with powerful SEO
									strategies, engaging content, and high-quality video
									editing.
								</p>
							</div>

							{/* Stats */}
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-4">
								{/* Card 1 */}
								<div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
									<h2 className="text-3xl font-bold text-white flex items-center gap-2">
										<GiCheckMark className="text-green-500 h-8 w-auto" />{" "}
										600+
									</h2>
									<p className="text-muted text-xs md:text-sm mt-1">
										Projects Completed
									</p>
								</div>

								{/* Card 2 */}
								<div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
									<h2 className="text-3xl font-bold text-white flex items-center gap-2">
										<BsGraphUpArrow className="text-green-500 h-8 w-auto" />{" "}
										100K+
									</h2>
									<p className="text-muted text-xs md:text-sm  mt-1">
										Content Reach
									</p>
								</div>

								{/* Card 3 */}
								<div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
									<h2 className="text-3xl font-bold text-white flex items-center gap-2">
										<FaAward className="text-green-400 h-8 w-auto" />{" "}
										5+
									</h2>
									<p className="text-muted text-xs md:text-sm mt-1">
										Years Experience
									</p>
								</div>

								{/* Card 4 */}
								<div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
									<h2 className="text-3xl font-bold text-white flex items-center gap-2">
										<FaUsers className="text-lime-500 h-8 w-auto" />{" "}
										500+
									</h2>
									<p className="text-muted text-xs md:text-sm mt-1">
										Happy Clients
									</p>
								</div>

								{/* Card 5 */}
								<div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
									<h2 className="text-3xl font-bold text-white flex items-center gap-2">
										<FaRepeat className="text-green-500 h-8 w-auto" />{" "}
										99%
									</h2>
									<p className="text-muted text-xs md:text-sm mt-1">
										Client Retention
									</p>
								</div>

								{/* Card 6 */}
								<div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
									<h2 className="text-3xl font-bold text-white flex items-center gap-2">
										<FaHeadphonesSimple className="text-yellow-400 h-8 w-auto" />{" "}
										24/7
									</h2>
									<p className="text-muted text-xs md:text-sm mt-1">
										Client Support
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right Image */}
					<motion.div
						initial={{ opacity: 0, x: 60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="relative flex justify-center lg:justify-end order-1 lg:order-2"
					>
						{/* Glow */}
						<div className="absolute w-72 h-72 bg-blue-500/30 blur-[120px] animate-pulse animation-duration-[3s] rounded-full" />

						<div className="relative group">
							<div className="absolute -inset-3 rounded-[40px] bg-linear-to-r from-blue-700 to-cyan-500 blur-xl opacity-30 animate-pulse animation-duration-[3s]" />

							<div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm z-10">
								<div className="relative w-[320px] h-105 md:w-95 md:h-125 rounded-xl overflow-hidden">
									<Image
										src="/images/samiul-islam.png"
										alt="Samiul Islam"
										fill
										className="object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
										priority
									/>
								</div>
							</div>
							<span className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-linear-to-tl from-blue-300 to-blue-400 animate-bounce animation-duration-[4s] opacity-30 z-20"></span>

							<span className="absolute rounded-2xl -left-5 -bottom-5 h-25 w-25 bg-linear-to-tl from-blue-300 to-blue-400 opacity-30"></span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
