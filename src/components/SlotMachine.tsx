import { useEffect, useRef, useState } from "react";

const reelSets = [
	["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
	["段", "級"],
	["前", "中", "後", "左", "右", "上", "下"],
] as const;
const slotNames = ["number", "grade", "position"] as const;
const pick = (set: readonly string[]) =>
	set[Math.floor(Math.random() * set.length)];

export function SlotMachine() {
	const [reels, setReels] = useState(["一", "級", "上"]);
	const [stopped, setStopped] = useState(3);
	const [won, setWon] = useState(false);
	const timers = useRef<ReturnType<typeof setInterval>[]>([]);

	useEffect(() => () => timers.current.forEach(clearInterval), []);

	const spin = () => {
		setStopped(0);
		setWon(false);
		timers.current.forEach(clearInterval);
		timers.current = [];

		const forceWin = new URLSearchParams(window.location.search).has("win");
		const finals = forceWin ? ["九", "段", "下"] : reelSets.map(pick);

		for (let i = 0; i < 3; i++) {
			const id = setInterval(() => {
				setReels((r) => r.map((v, j) => (j === i ? pick(reelSets[i]) : v)));
			}, 60);
			timers.current.push(id);

			setTimeout(
				() => {
					clearInterval(id);
					setReels((r) => r.map((v, j) => (j === i ? finals[i] : v)));
					setStopped((c) => c + 1);
				},
				600 + i * 400,
			);
		}

		setTimeout(() => {
			if (finals[0] === "九" && finals[1] === "段" && finals[2] === "下")
				setWon(true);
		}, 1400);
	};

	const spinning = stopped < 3;

	return (
		<div>
			<div className="flex justify-center text-4xl gap-3">
				{reels.map((symbol, i) => (
					<div
						key={slotNames[i]}
						className={`w-20 h-20 flex items-center justify-center rounded-xl border-2 select-none transition-all duration-300 ${
							spinning && stopped <= i
								? "bg-gray-50 border-blue-400 shadow-md scale-105"
								: won
									? "border-yellow-400 shadow-lg shadow-yellow-100"
									: "bg-white border-gray-200 shadow-sm"
						}`}
					>
						<span
							className={
								spinning && stopped <= i
									? "blur-[1px] text-gray-400"
									: won
										? "text-yellow-600"
										: ""
							}
						>
							{symbol}
						</span>
					</div>
				))}
			</div>

			<button
				type="button"
				onClick={spin}
				disabled={spinning}
				className="mt-8 px-8 py-3 text-white rounded-xl font-bold text-lg transition-all duration-200 cursor-pointer bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
			>
				{spinning ? "Spinning..." : "Spin!"}
			</button>

			{won && (
				<div className="mt-8">
					<p className="text-2xl font-bold text-yellow-600 animate-bounce">
						🎉 Congratulations! 九段下 🎉
					</p>
					<img
						src="/kudanshita.webp"
						alt="九段下駅"
						className="mt-4 max-w-md w-full mx-auto rounded-xl shadow-lg"
					/>
				</div>
			)}
		</div>
	);
}
