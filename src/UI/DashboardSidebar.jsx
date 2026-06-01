"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiLogout } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

import {
	FiChevronDown,
	FiFolder,
	FiMenu,
	FiMessageSquare,
	FiX,
} from "react-icons/fi";

const DashboardSidebar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const [portfolioOpen, setPortfolioOpen] = useState(true);
	const [reviewsOpen, setReviewsOpen] = useState(true);

	const handleLogOut = async () => {
		await authClient.signOut();
		toast.success("Logout success");
		router.push("/");
	};

	return (
		<>
			{/* Mobile Top Bar */}
			<div className="lg:hidden sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl">
				<div className="flex items-center justify-between p-4">
					<h2 className="text-white font-bold text-xl">Dashboard</h2>

					<button
						onClick={() => setIsOpen(true)}
						className="p-2 rounded-lg bg-white/5 text-white"
					>
						<FiMenu size={24} />
					</button>
				</div>
			</div>

			{/* Overlay */}
			{isOpen && (
				<div
					onClick={() => setIsOpen(false)}
					className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
				/>
			)}

			{/* Sidebar */}
			<aside
				className={`fixed top-0 left-0 z-50 h-screen w-72 border-r border-white/10 backdrop-blur-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
			>
				{/* Header */}
				<div className="border-b border-white/10 p-6">
					<div className="flex items-center justify-between">
						<Link href={"/dashboard"}>
							<h2 className="text-white text-2xl font-bold">
								Admin Panel
							</h2>

							<p className="text-slate-400 text-sm mt-1">
								Manage Website
							</p>
						</Link>

						<button
							onClick={() => setIsOpen(false)}
							className="lg:hidden text-white"
						>
							<FiX size={24} />
						</button>
					</div>
				</div>

				<div className="p-4 space-y-3">
					{/* Back To Home */}
					<div>
						<Link
							href={"/"}
							className="w-full flex items-center justify-between p-3 rounded-xl text-white hover:bg-blue-500/10s"
						>
							<div className="flex items-center gap-3">
								<FaHome />
								Back To Home
							</div>
						</Link>
					</div>

					{/* Portfolio */}
					<div>
						<button
							onClick={() => setPortfolioOpen(!portfolioOpen)}
							className="w-full flex items-center justify-between p-3 rounded-xl text-white hover:bg-blue-500/10s"
						>
							<div className="flex items-center gap-3">
								<FiFolder />
								Portfolio
							</div>

							<FiChevronDown
								className={`transition-transform ${
									portfolioOpen ? "rotate-180" : ""
								}`}
							/>
						</button>

						{portfolioOpen && (
							<div className="ml-8 mt-2 space-y-2">
								<Link
									href="/dashboard/portfolio"
									className={`
										block
										p-2
										rounded-lg
										${
											pathname === "/dashboard/portfolio"
												? "bg-blue-600 text-white"
												: "text-slate-300 hover:bg-white/5"
										}
									`}
								>
									All Portfolio
								</Link>

								<Link
									href="/dashboard/portfolio/add-portfolio"
									className={`
										block
										p-2
										rounded-lg
										${
											pathname ===
											"/dashboard/portfolio/add-portfolio"
												? "bg-blue-600 text-white"
												: "text-slate-300 hover:bg-white/5"
										}
									`}
								>
									Add Portfolio
								</Link>
							</div>
						)}
					</div>

					{/* Reviews */}
					<div>
						<button
							onClick={() => setReviewsOpen(!reviewsOpen)}
							className="w-full flex items-center justify-between p-3 rounded-xl text-white hover:bg-blue-500/10"
						>
							<div className="flex items-center gap-3">
								<FiMessageSquare />
								Client Reviews
							</div>

							<FiChevronDown
								className={`transition-transform ${
									reviewsOpen ? "rotate-180" : ""
								}`}
							/>
						</button>

						{reviewsOpen && (
							<div className="ml-8 mt-2 space-y-2">
								<Link
									href="/dashboard/reviews"
									className={`
										block
										p-2
										rounded-lg
										${
											pathname === "/dashboard/reviews"
												? "bg-blue-600 text-white"
												: "text-slate-300 hover:bg-white/5"
										}
									`}
								>
									All Reviews
								</Link>

								<Link
									href="/dashboard/reviews/add-review"
									className={`
										block
										p-2
										rounded-lg
										${
											pathname === "/dashboard/reviews/add-review"
												? "bg-blue-600 text-white"
												: "text-slate-300 hover:bg-white/5"
										}
									`}
								>
									Add Review
								</Link>
							</div>
						)}
					</div>

					{/* Logout */}
					<div onClick={handleLogOut} className="cursor-pointer">
						<span
							href={"/"}
							className="w-full flex items-center justify-between p-3 rounded-xl text-white hover:bg-blue-500/10s"
						>
							<div className="flex items-center gap-3">
								<CiLogout className="h-6 w-auto" />
								Log Out
							</div>
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};

export default DashboardSidebar;
