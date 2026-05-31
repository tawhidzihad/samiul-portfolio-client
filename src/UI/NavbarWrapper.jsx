"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

const NavbarWrapper = () => {
	const pathname = usePathname();

	if (pathname.startsWith("/portfolio")) {
		return null;
	}

	return <Navbar />;
};

export default NavbarWrapper;
