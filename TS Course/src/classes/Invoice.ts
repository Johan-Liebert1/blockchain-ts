import HasFormatter from "../interface/hasForamtter.js";

// classes
class Invoice implements HasFormatter {
	readonly client: string;
	private details: string;
	private amount: number;

	constructor(c: string, d: string, a: number) {
		this.client = c;
		this.details = d;
		this.amount = a;
	}

	format(): string {
		return `${this.client} owes $${this.amount} for ${this.details}`;
	}
}

export default Invoice;
