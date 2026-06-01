"use client";

import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleLoginBtn = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const userData = Object.fromEntries(formData.entries());

		const { data, error } = await authClient.signIn.email({
			email: userData.email,
			password: userData.password,
			rememberMe: true,
		});

		if (error) {
			toast.error(error.message);
			return;
		}

		if (data) {
			toast.success("Welcome back! Glad to see you again.");
			redirect("/dashboard");
		}
	};

	return (
		<div className="min-h-screen bg-blue-950 dark:bg-black flex items-center justify-center px-4 py-10">
			{/* Background Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-600/10 blur-[150px] rounded-full" />

			<div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
				{/* Heading */}
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold text-white">
						Welcome Back 👋
					</h1>

					<p className="text-slate-400 mt-2">
						Log in to your account and continue managing your projects,
						reviews, and content.
					</p>
				</div>

				<form className="space-y-5" onSubmit={handleLoginBtn}>
					{/* Email */}
					<div>
						<label className="text-sm text-slate-300 mb-2 block">
							Email Address
						</label>

						<div className="relative">
							<Mail
								size={18}
								className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
							/>

							<input
								name="email"
								type="email"
								required
								placeholder="example@gmail.com"
								className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500"
							/>
						</div>
					</div>

					{/* Password */}
					<div>
						<label className="text-sm text-slate-300 mb-2 block">
							Password
						</label>

						<div className="relative">
							<Lock
								size={18}
								className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
							/>

							<input
								name="password"
								type={showPassword ? "text" : "password"}
								required
								minLength={8}
								placeholder="Enter your password"
								className="w-full pl-11 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500"
							/>

							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
							>
								{showPassword ? (
									<EyeOff size={18} />
								) : (
									<Eye size={18} />
								)}
							</button>
						</div>
					</div>

					{/* Submit */}
					<button
						type="submit"
						className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-3 font-medium text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
					>
						Login to Dashboard
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignInPage;
