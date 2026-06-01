"use client";

import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const FooterWrapper = () => {
	const pathname = usePathname();

	if (pathname.startsWith("/portfolio")) {
		return null;
	}
	if (pathname.startsWith("/dashboard")) {
		return null;
	}
	if (pathname.startsWith("/signup")) {
		return null;
	}
	if (pathname.startsWith("/signin")) {
		return null;
	}

	return <Footer />;
};

export default FooterWrapper;
