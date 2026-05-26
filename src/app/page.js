import AboutMe from "@/components/PageSections/AboutMe";
import Portfolio from "@/components/PageSections/Portfolio";
import Pricing from "@/components/PageSections/Pricing";
import Services from "@/components/PageSections/Services";
import Testimonials from "@/components/PageSections/Testimonials";

export default function Home() {
	return (
		<div>
			<AboutMe></AboutMe>
			<Portfolio></Portfolio>
			<Services></Services>
			<Testimonials></Testimonials>
			<Pricing></Pricing>
		</div>
	);
}
