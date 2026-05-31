"use client";

import NavigationLinks from "@/UI/NavigationLinks";
import ThemeToggle from "@/UI/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RiMenuLine, RiMenuUnfoldFill } from "react-icons/ri";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="fixed left-1/2 top-8 lg:top-12 -translate-x-1/2 -translate-y-1/2 z-50 w-full md:mx-auto md:max-w-4xl backdrop-blur-xs bg-black/5 lg:rounded-xl lg:border border-blue-900">
			{/* For Large Screens */}
			<header className="flex py-2 w-full items-center justify-between px-3">
				{/* Logo and Name */}
				<div className="flex items-center gap-4">
					<button
						className="text-white md:hidden relative"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
					>
						<span className="sr-only">Menu</span>
						<div>
							{isMenuOpen ? (
								<RiMenuUnfoldFill className="w-7 h-7" />
							) : (
								<RiMenuLine className="w-7 h-7" />
							)}
						</div>
					</button>
					<div>
						<div className="flex justify-center items-center">
							<Link href={"/"}>
								<Image
									src={"/images/logo.png"}
									alt=""
									width={100}
									height={100}
									loading="eager"
									className="rounded-full h-13 w-auto"
								/>
							</Link>
						</div>
					</div>
				</div>

				{/* Navigation links */}
				<div className="flex items-center gap-9">
					<ul className="hidden items-center gap-4 md:flex">
						<NavigationLinks href="#about">About</NavigationLinks>
						<NavigationLinks href="#portfolio">Portfolio</NavigationLinks>
						<NavigationLinks href="#services">Services</NavigationLinks>
						<NavigationLinks href="#testimonials">
							Client Reviews
						</NavigationLinks>
					</ul>

					<span className="h-7 w-px bg-gray-600 hidden md:block"></span>

					<div className="flex items-center gap-5">
						<div className="flex">
							<ThemeToggle></ThemeToggle>
						</div>

						<a
							href="https://wa.me/+8801773070054"
							target="_blank"
							className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-blue-400/20 bg-linear-to-r from-blue-600 to-blue-500 px-3 md:px-4 py-2 font-medium text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(59,130,246,0.6)]"
						>
							{/* Glow Effect */}
							<span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							{/* Animated Shine */}
							<span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]" />

							<span className="relative flex items-center gap-2">
								Contact
								<FaWhatsapp className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
							</span>
						</a>
					</div>
				</div>
			</header>

			{/* For Mobile Devices */}
			<div
				className={`md:hidden absolute z-50 w-full bg-blue-950 dark:bg-black py-3 ${
					isMenuOpen
						? "opacity-100 transition-all duration-300 translate-y-0 scale-100"
						: "opacity-0 transition-all duration-300 -translate-y-3 scale-95 pointer-events-none"
				}`}
			>
				<div>
					<ul className="flex flex-col pl-4 w-full">
						<NavigationLinks href="#about">About</NavigationLinks>

						<NavigationLinks href="#portfolio">Portfolio</NavigationLinks>

						<NavigationLinks href="#services">Services</NavigationLinks>

						<NavigationLinks href="#testimonials">
							Client Reviews
						</NavigationLinks>
					</ul>
				</div>
			</div>
		</nav>
	);
}
