"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

const NavbarWrapper = () => {
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

	return <Navbar />;
};

export default NavbarWrapper;
