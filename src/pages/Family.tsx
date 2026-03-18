import { Link } from "react-router-dom";

export function Family() {
	const images = [
		{ src: "/kumackey.png", alt: "kumackey" },
		{ src: "/family/kumakey.png", alt: "kumakey" },
		{ src: "/family/kumackey_chofu.png", alt: "kumackey" },
		{ src: "/family/kumakkey.png", alt: "kumakkey" },
		{ src: "/family/kumacky.jpg", alt: "kumacky" },
		{ src: "/family/kumakky.gif", alt: "kumakky" },
	];

	return (
		<div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
			<header className="bg-gradient-to-b from-gray-100 to-gray-50 py-8 mb-8 text-center">
				<h1 className="text-2xl font-bold mb-3 tracking-tight">Family</h1>
				<Link
					to="/"
					className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
				>
					← Back to Home
				</Link>
			</header>

			<main className="px-4">
				<section className="mb-8">
					<article className="max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-sm">
						<div className="flex justify-center gap-4 flex-wrap">
							{images.map((img) => (
								<img
									key={img.src}
									src={img.src}
									alt={img.alt}
									className="w-28 h-28 object-contain rounded-xl bg-gray-50 p-2 transition-transform duration-200 hover:scale-105"
									width={112}
									height={112}
									loading="lazy"
								/>
							))}
						</div>
					</article>
				</section>
			</main>
		</div>
	);
}
