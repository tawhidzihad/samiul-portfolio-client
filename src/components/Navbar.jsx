"use client";

import NavigationLinks from "@/UI/NavigationLinks";
import ThemeToggle from "@/UI/ThemeToggle";
import { Button } from "@heroui/react";
import { useState } from "react";
import { RiMenuLine, RiMenuUnfoldFill } from "react-icons/ri";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="fixed left-1/2 top-8 lg:top-12 -translate-x-1/2 -translate-y-1/2 z-50 w-full md:mx-auto md:max-w-5xl backdrop-blur-xs bg-black/5 lg:rounded-xl border border-gray-200">
			{/* For Large Screens */}
			<header className="flex py-3 w-full items-center justify-between px-5 relative">
				{/* Logo and Name */}
				<div className="flex items-center gap-4">
					<button
						className="md:hidden"
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
					<div className="flex items-center gap-3">
						<h1 className="bg-linear-to-r from-blue-300 to-indigo-500 rounded-xl h-9 w-9 flex justify-center items-center">
							<span className="text-3xl text-white">S</span>
						</h1>
						{/* <p className="font-medium"></p> */}
					</div>
				</div>

				{/* Navigation links */}
				<div className="flex items-center gap-9">
					<ul className="hidden items-center gap-4 md:flex">
						<NavigationLinks href="#about">About</NavigationLinks>
						<NavigationLinks href="#portfolio">Portfolio</NavigationLinks>
						<NavigationLinks href="#services">Services</NavigationLinks>
						<NavigationLinks href="#testimonials">
							Testimonials
						</NavigationLinks>
						<NavigationLinks href="#pricing">Pricing</NavigationLinks>
					</ul>

					<span className="h-7 w-px bg-gray-600 hidden md:block"></span>

					<div className="flex items-center gap-5">
						<div className="flex">
							<ThemeToggle></ThemeToggle>
						</div>

						<Button>Contact</Button>
					</div>
				</div>
			</header>

			{/* For Mobile Devices */}
			{isMenuOpen && (
				<div className="absolute z-50 w-full bg-white dark:bg-black md:hidden">
					<ul className="flex flex-col pl-4 w-full">
						<NavigationLinks
							href="#about"
							className={"border-b border-zinc-100 py-3 w-full"}
						>
							About
						</NavigationLinks>
						<NavigationLinks
							href="#portfolio"
							className={"border-b border-zinc-100 py-3 w-full"}
						>
							Portfolio
						</NavigationLinks>

						<NavigationLinks
							href="#services"
							className={"border-b border-zinc-100 py-3 w-full"}
						>
							Services
						</NavigationLinks>
						<NavigationLinks
							href="#testimonials"
							className={"border-b border-zinc-100 py-3 w-full"}
						>
							Testimonials
						</NavigationLinks>

						<NavigationLinks href="#pricing" className={" py-3 w-full"}>
							Pricing
						</NavigationLinks>
					</ul>
				</div>
			)}
		</nav>
	);
}
