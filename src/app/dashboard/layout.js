import DashboardSidebar from "@/UI/DashboardSidebar";

export const metadata = {
	title: "Dashboard | Samiul TubeGrowth Studio",
};

export default function DashboardLayout({ children }) {
	return (
		<div className="min-h-screen bg-blue-950 dark:bg-black">
			<DashboardSidebar />

			<main className="lg:ml-72 p-4 md:p-6 lg:p-8">{children}</main>
		</div>
	);
}
