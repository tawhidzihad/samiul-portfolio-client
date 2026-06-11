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
	title: "Home | Samiul TubeGrowth Studio",
	description:
		"Professional Digital Marketer, YouTube SEO Specialist, Video Editor, and Growth Strategist helping brands and creators increase reach, engagement, subscribers, watch time, and online visibility through proven digital marketing solutions.",

	keywords: [
		"Digital Marketing",
		"YouTube SEO",
		"YouTube Marketing",
		"YouTube Growth",
		"YouTube Monetization",
		"YouTube Watch Time",
		"Subscriber Growth",
		"YouTube Channel Management",
		"Google Ads",
		"Google Ads Specialist",
		"Facebook Ads",
		"Facebook Ads Expert",
		"Instagram Marketing",
		"Social Media Marketing",
		"Social Media Management",
		"Video Editing",
		"Thumbnail Design",
		"Content Marketing",
		"Lead Generation",
		"Brand Promotion",
		"Online Advertising",
		"Paid Ads Management",
		"Digital Growth Strategy",
		"Digital Marketing Expert",
		"YouTube Growth Expert",
		"SEO Specialist",
		"YouTube Consultant",
		"Content Creator Growth",
		"Video Marketing",
		"Organic Growth",
		"Channel Optimization",
		"Personal Branding",
		"Business Growth",
		"Marketing Consultant",
	],

	authors: [
		{
			name: "Samiul Islam",
		},
	],

	creator: "Samiul Islam",

	publisher: "Samiul TubeGrowth Studio",

	metadataBase: new URL("https://samiul-tubegrowth-studio.vercel.app"),

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	openGraph: {
		title: "Samiul TubeGrowth Studio",
		description:
			"Professional Digital Marketing, YouTube SEO, Video Editing, Google Ads, Facebook Ads, and Social Media Growth Services.",

		url: "https://samiul-tubegrowth-studio.vercel.app",

		siteName: "Samiul TubeGrowth Studio",

		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Samiul TubeGrowth Studio",
			},
		],

		locale: "en_US",

		type: "website",
	},

	twitter: {
		card: "summary_large_image",

		title: "Samiul TubeGrowth Studio",

		description:
			"Professional Digital Marketing, YouTube SEO, Video Editing, Google Ads, Facebook Ads, and Social Media Growth Services.",

		images: ["/og-image.png"],
	},

	category: "Digital Marketing",
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
