import { useState } from "react";

const numbers = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
const grades = ["段", "級"];
const positions = ["前", "中", "後", "左", "右", "上", "下"];

const getRandomNumber = () =>
	numbers[Math.floor(Math.random() * numbers.length)];
const getRandomGrade = () => grades[Math.floor(Math.random() * grades.length)];
const getRandomPosition = () =>
	positions[Math.floor(Math.random() * positions.length)];

export function SlotMachine() {
	const slotNames = ["number", "grade", "position"] as const;
	const [reels, setReels] = useState(["一", "級", "上"]);
	const [spinning, setSpinning] = useState(false);
	const [celebration, setCelebration] = useState(false);

	const spin = () => {
		setSpinning(true);
		setCelebration(false);
		setTimeout(() => {
			const newReels = [
				getRandomNumber(),
				getRandomGrade(),
				getRandomPosition(),
			];
			setReels(newReels);
			setSpinning(false);
			if (isKudanshita(newReels)) {
				setCelebration(true);
			}
		}, 1000);
	};

	return (
		<div>
			<div className="flex justify-center text-4xl gap-1">
				{reels.map((symbol, i) => (
					<div
						key={slotNames[i]}
						className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-200"
					>
						{symbol}
					</div>
				))}
			</div>
			<button
				type="button"
				onClick={spin}
				disabled={spinning}
				className="mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400 transition-colors duration-200 cursor-pointer font-medium"
			>
				{spinning ? "Spinning..." : "Spin"}
			</button>
			{celebration && (
				<div className="mt-6 text-xl text-green-600 font-medium">
					Congratulations! 九段下🎉
				</div>
			)}
		</div>
	);
}

const isKudanshita = (reels: string[]) => {
	return reels[0] === "九" && reels[1] === "段" && reels[2] === "下";
};
