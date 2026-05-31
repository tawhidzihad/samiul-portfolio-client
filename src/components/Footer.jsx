import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="bg-blue-950 dark:bg-black border-t border-white/10">
			<div className="max-w-7xl mx-auto px-6 lg:px-0 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Logo, About & Social Links */}
					<div className="space-y-5">
						<div className="flex items-center justify-center gap-5">
							<div className="h-30 w-30 flex items-center">
								<Link href="/">
									<Image
										src={"/images/logo.png"}
										alt="Studio Logo"
										width={1000}
										height={1000}
									/>
								</Link>
							</div>
							<div>
								<h1 className="text-2xl font-bold text-white">
									Samiul
									<span className="text-blue-500"> TubeGrowth</span>
								</h1>
							</div>
						</div>

						<p className="text-slate-400 leading-relaxed text-sm">
							Helping creators and brands grow with YouTube SEO, video
							editing, social media management, and modern digital
							marketing.
						</p>

						<div className="flex items-center gap-4">
							<Link
								href="https://www.facebook.com/samiulislam70"
								target="_blank"
								className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
							>
								<FaFacebookF />
							</Link>

							<Link
								href="https://www.instagram.com/samiulislam78076"
								target="_blank"
								className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
							>
								<FaInstagram />
							</Link>

							<Link
								href="https://x.com/Srsamiul780"
								target="_blank"
								className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
							>
								<FaXTwitter />
							</Link>

							<Link
								href="https://www.linkedin.com/in/-samiul-islam"
								target="_blank"
								className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
							>
								<FaLinkedinIn />
							</Link>
						</div>
					</div>

					{/* Navigation */}
					<div>
						<h2 className="text-xl font-semibold text-white mb-6">
							Navigation
						</h2>

						<ul className="space-y-4">
							<li>
								<Link
									href="#home"
									className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
								>
									Home
								</Link>
							</li>

							<li>
								<Link
									href="#portfolio"
									className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
								>
									Portfolio
								</Link>
							</li>

							<li>
								<Link
									href="#services"
									className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
								>
									Services
								</Link>
							</li>

							<li>
								<Link
									href="#about"
									className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
								>
									About
								</Link>
							</li>

							<li>
								<Link
									href="#contact"
									className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h2 className="text-xl font-semibold text-white mb-6">
							Let&apos;s Connect
						</h2>

						<div className="space-y-5">
							<div>
								<p className="text-slate-500 text-sm mb-1">Email</p>

								<a
									href="mailto:samiulislamtubegrowthstudio@gmail.com"
									className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
								>
									samiulislamtubegrowthstudio@gmail.com
								</a>
							</div>

							<div>
								<p className="text-slate-500 text-sm mb-1">WhatsApp</p>

								<a
									href="https://wa.me/+8801773070054"
									target="_blank"
									className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
								>
									+8801773070054
								</a>
							</div>

							<div>
								<p className="text-slate-500 text-sm mb-1">Location</p>

								<p className="text-slate-300">Dhaka, Bangladesh</p>
							</div>
						</div>
					</div>

					{/* Newsletter */}
					<div>
						<h2 className="text-xl font-semibold text-white mb-6">
							Newsletter
						</h2>

						<p className="text-slate-400 text-sm leading-relaxed mb-5">
							Subscribe to get updates, marketing tips, YouTube growth
							strategies, and latest project insights.
						</p>

						<form className="space-y-4">
							<div className="relative">
								<input
									type="email"
									placeholder="Enter your email"
									className="w-full h-12 rounded-lg bg-white/5 border border-white/10 pl-12 pr-4 text-white outline-none focus:border-blue-500 transition-all duration-300"
								/>

								<MdOutlineEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl" />
							</div>

							<button
								type="submit"
								className="w-full h-10 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300 text-white font-medium flex items-center justify-center gap-2"
							>
								Subscribe
								<FiSend />
							</button>
						</form>
					</div>
				</div>

				{/* Bottom */}
				<div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-slate-500 text-sm text-center md:text-left">
						© {new Date().getFullYear()} Samiul TubeGrowth Studio. All
						Rights Reserved.
					</p>

					<div className="flex items-center gap-5 text-sm">
						<Link
							href="/"
							className="text-slate-500 hover:text-blue-400 transition-colors duration-300"
						>
							Privacy Policy
						</Link>

						<Link
							href="/"
							className="text-slate-500 hover:text-blue-400 transition-colors duration-300"
						>
							Terms & Conditions
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
