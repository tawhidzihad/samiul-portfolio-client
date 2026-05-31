"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle, FaQuoteLeft, FaStar } from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
	{
		id: 1,
		name: "John Anderson",
		role: "YouTube Creator",
		image: "/images/reviews/client-1.jpg",
		rating: 5,
		review:
			"My channel impressions increased significantly after the SEO optimization. Great communication and excellent results.",
	},

	{
		id: 2,
		name: "Sarah Williams",
		role: "Business Owner",
		image: "/images/reviews/client-2.jpg",
		rating: 5,
		review:
			"Professional service and outstanding attention to detail. Highly recommended for content creators.",
	},

	{
		id: 3,
		name: "David Brown",
		role: "Gaming Creator",
		image: "/images/reviews/client-3.jpg",
		rating: 5,
		review:
			"The thumbnail designs improved my CTR and helped my videos perform much better.",
	},

	{
		id: 4,
		name: "Emily Carter",
		role: "Content Creator",
		image: "/images/reviews/client-4.jpg",
		rating: 5,
		review:
			"Fast delivery, excellent communication, and real growth results. Will work together again.",
	},
];

const Testimonials = () => {
	return (
		<section
			id="testimonials"
			className="relative bg-blue-950 dark:bg-black py-20 overflow-x-hidden"
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
						CLIENT REVIEWS
					</p>

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
						Client
						<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
							{" "}
							Success Stories
						</span>
					</h2>

					<p className="text-slate-400 mt-6 text-lg leading-relaxed">
						Real feedback from creators and businesses who trusted my
						services to grow their channels, brands, and online presence.
					</p>
				</motion.div>

				{/* Slider */}
				<div className="mt-16 pt-4">
					<Swiper
						modules={[Navigation, Autoplay]}
						loop={true}
						grabCursor={true}
						navigation={true}
						spaceBetween={24}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							1200: {
								slidesPerView: 3,
							},
						}}
						className="w-full"
					>
						{testimonials.map((testimonial) => (
							<SwiperSlide key={testimonial.id} className="h-auto">
								<div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.07] hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]">
									{/* Quote */}
									<FaQuoteLeft className="text-blue-500 text-3xl mb-6" />

									{/* Rating */}
									<div className="flex gap-1 mb-5">
										{[...Array(testimonial.rating)].map(
											(_, index) => (
												<FaStar
													key={index}
													className="text-yellow-400"
												/>
											),
										)}
									</div>

									{/* Review */}
									<p className="text-slate-300 leading-relaxed min-h-30">
										&quot;`{testimonial.review}&quot;`
									</p>

									{/* User */}
									<div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
										<div className="relative w-14 h-14 rounded-full overflow-hidden border border-blue-500/30">
											<Image
												src={testimonial.image}
												alt={testimonial.name}
												fill
												className="object-cover"
											/>
										</div>

										<div>
											<div className="flex items-center gap-2">
												<h4 className="font-semibold text-white">
													{testimonial.name}
												</h4>

												<FaCheckCircle className="text-blue-500 text-sm" />
											</div>

											<p className="text-slate-400 text-sm">
												{testimonial.role}
											</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
