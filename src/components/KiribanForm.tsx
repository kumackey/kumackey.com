import { useState } from "react";

export function KiribanForm() {
	const [number, setNumber] = useState("");
	const [result, setResult] = useState("");

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const response = await fetch(
				`https://api.kiriban.kumackey.com/check/${number}`,
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			if (data.result) {
				setResult(`${data.number}はキリ番です！次のキリ番は${data.next}です！`);
			} else {
				setResult(`${data.number}はキリ番ではありません...`);
			}
		} catch {
			setResult("通信に失敗しました");
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
				className="border border-gray-300 rounded-lg px-3 py-1.5 w-32 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow duration-200"
			/>
			<button
				type="submit"
				className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 cursor-pointer"
			>
				キリ番チェック
			</button>
			<span className="text-sm">{result}</span>
		</form>
	);
}
