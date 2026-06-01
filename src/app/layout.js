import dns from "node:dns";

dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import FooterWrapper from "@/UI/FooterWrapper";
import NavbarWrapper from "@/UI/NavbarWrapper";
import { Open_Sans, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import NextThemeProvider from "./NextThemeProvider";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "500", "900"],
});

const openSans = Open_Sans({
	variable: "--font-openSans",
	subsets: ["latin"],
});

export const metadata = {
	title: "Samiul TubeGrowth Studio | Home",
	description:
		"Professional Digital Marketer, YouTube SEO Specialist & Video Editor helping brands and creators grow with powerful SEO strategies, engaging content, and high-quality video editing. Focused on increasing reach, audience engagement, and building a strong online presence.",
};

export default function RootLayout({ children }) {
	return (
		<html
			data-scroll-behavior="smooth"
			suppressHydrationWarning
			lang="en"
			className={`${openSans.className} h-full antialiased light scroll-smooth`}
			data-theme="light"
		>
			<body className="min-h-full flex flex-col bg-background text-foreground">
				<NextThemeProvider>
					<NavbarWrapper></NavbarWrapper>
					<main>{children}</main>
					<FooterWrapper></FooterWrapper>
				</NextThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
