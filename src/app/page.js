import AboutMe from "@/components/PageSections/AboutMe";
import Portfolio from "@/components/PageSections/Portfolio";
import Services from "@/components/PageSections/Services";
import Testimonials from "@/components/PageSections/Testimonials";

export default function Home() {
	return (
		<div>
			<AboutMe></AboutMe>
			<Portfolio></Portfolio>
			<Services></Services>
			<Testimonials></Testimonials>
		</div>
	);
}
