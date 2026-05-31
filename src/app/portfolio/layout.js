import PortfolioNavbar from "@/components/PortfolioNavbar";

export default function PortfolioLayout({ children }) {
	return (
		<div className="bg-blue-950 dark:bg-black">
			<PortfolioNavbar />
			<main>{children}</main>
		</div>
	);
}
