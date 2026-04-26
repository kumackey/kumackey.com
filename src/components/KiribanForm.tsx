import { useState } from "react";

type ResultState =
	| { status: "idle" }
	| { status: "success"; message: string }
	| { status: "error"; message: string };

export function KiribanForm() {
	const [number, setNumber] = useState("");
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState<ResultState>({ status: "idle" });

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setLoading(true);
		try {
			const response = await fetch(
				`https://api.kiriban.kumackey.com/check/${number}`,
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			if (data.result) {
				setResult({
					status: "success",
					message: `${data.number}はキリ番です！次のキリ番は${data.next}です！`,
				});
			} else {
				setResult({
					status: "error",
					message: `${data.number}はキリ番ではありません...`,
				});
			}
		} catch {
			setResult({ status: "error", message: "通信に失敗しました" });
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-2 items-center flex-wrap">
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
				required
				max={999999}
				min={-999999}
				disabled={loading}
				className="border border-gray-300 rounded-lg px-3 py-1.5 w-32 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow duration-200 disabled:opacity-50"
			/>
			<button
				type="submit"
				disabled={loading}
				className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
			>
				{loading && (
					<svg
						className="animate-spin h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
						/>
					</svg>
				)}
				キリ番チェック
			</button>
			{result.status !== "idle" && (
				<span
					className={`text-sm ${result.status === "success" ? "text-green-600" : "text-red-500"}`}
				>
					{result.message}
				</span>
			)}
		</form>
	);
}
