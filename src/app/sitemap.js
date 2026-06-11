export default function sitemap() {
	return [
		{
			url: "https://samiul-tubegrowth-studio.vercel.app",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: "https://samiul-tubegrowth-studio.vercel.app/portfolio",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
	];
}
