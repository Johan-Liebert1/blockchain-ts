class Payment {
    constructor(r, d, a) {
        this.receipient = r;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.receipient} owes $${this.amount} for ${this.details}`;
    }
}
export default Payment;
