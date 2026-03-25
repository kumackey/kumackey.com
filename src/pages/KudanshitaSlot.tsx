import { Link } from "react-router-dom";
import { SlotMachine } from "../components/SlotMachine";
import { useHead } from "../hooks/useHead";

export function KudanshitaSlot() {
	useHead({
		title: "Kudanshita Slot - kumackey.com",
		description: "九段下の完成を目指すスロットゲーム。",
		path: "/kudanshita-slot",
	});
	return (
		<div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
			<header className="bg-gradient-to-b from-gray-100 to-gray-50 py-8 mb-8 text-center">
				<h1 className="text-2xl font-bold mb-3 tracking-tight">
					Kudanshita Slot🎰
				</h1>
				<Link
					to="/"
					className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
				>
					← Back to Home
				</Link>
			</header>

			<main className="px-4">
				<section className="mb-8">
					<article className="max-w-3xl mx-auto bg-white rounded-2xl p-6 text-center shadow-sm">
						<SlotMachine />
					</article>
				</section>
			</main>
		</div>
	);
}
