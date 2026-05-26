"use client";

import { TypeAnimation } from "react-type-animation";

const TypeWriting = () => {
	return (
		<>
			<TypeAnimation
				sequence={[
					"Digital Marketer.",
					1000,
					"YouTube SEO Specialist.",
					1000,
					"Video Editor.",
					1000,
				]}
				wrapper="span"
				speed={30}
				cursor={false}
				style={{ display: "inline-block" }}
				repeat={Infinity}
				className="text-blue-500 font-medium leading-relaxed text-[16px] md:text-lg"
			/>
		</>
	);
};

export default TypeWriting;
