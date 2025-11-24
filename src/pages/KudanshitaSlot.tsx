import { Link } from "react-router-dom";
import { SlotMachine } from "../components/SlotMachine";

export function KudanshitaSlot() {
	return (
		<div className="min-h-screen bg-white text-gray-800 font-sans">
			<header className="bg-gray-100 py-4 mb-5 text-center">
				<h1 className="text-2xl font-bold mb-2">Kudanshita Slot🎰</h1>
				<Link to="/" className="text-blue-600 hover:text-blue-800">
					← Back to Home
				</Link>
			</header>

			<main className="px-4">
				<section className="mb-5">
					<article className="max-w-3xl mx-auto bg-gray-100 rounded-lg p-5 text-center">
						<SlotMachine />
					</article>
				</section>
			</main>
		</div>
	);
}
