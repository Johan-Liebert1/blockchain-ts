import HasFormatter from "../interface/hasForamtter.js";

class Payment implements HasFormatter {
	readonly receipient: string;
	private details: string;
	private amount: number;

	constructor(r: string, d: string, a: number) {
		this.receipient = r;
		this.details = d;
		this.amount = a;
	}

	format(): string {
		return `${this.receipient} owes $${this.amount} for ${this.details}`;
	}
}

export default Payment;
