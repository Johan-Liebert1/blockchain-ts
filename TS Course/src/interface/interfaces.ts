// Interfaces

interface isPerson {
	name: string;
	age: number;
	speak(a: string): void;
	spend(a: number): number;
}

const me: isPerson = {
	name: "Pragyan",
	age: 21,
	speak(text: string): void {
		console.log(text);
	},
	spend(amount: number): number {
		return amount;
	}
};
