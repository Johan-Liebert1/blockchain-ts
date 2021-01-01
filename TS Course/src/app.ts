import Invoice from "./classes/Invoice.js";
import ListTemplate from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
import HasFormatter from "./interface/hasForamtter.js";

const newInv = new Invoice("Pragyan", "Chips", 23);
const newInv2 = new Invoice("Mario", "Pringles", 100);

let invoices: Invoice[] = [newInv, newInv2];

console.log(invoices);

const anchor: HTMLAnchorElement = document.querySelector("a")!; // Object is possibly 'null'
// to combat that put '!' at the end to tell TS that we're certain that the anchor tag exists

// if we are selecting a dom element using a class or an ID, then TS doesn't
// know the type of element we're selecting. So we typecast that element using "as"
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;

const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();

	let doc: HasFormatter;
	// doc = object of some class that must have had implemented hasForamtter

	if (type.value === "invoice") {
		doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
	} else {
		doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
	}

	list.render(doc, type.value, "end");
});

// GENERICS

const addUid = <T extends object>(obj: T): T => {
	return { ...obj, uid: Math.random() * 100 };
};

let doc1 = addUid({ name: "Johan", age: 20 });

console.log(doc1.name);

interface Resource<T> {
	name: string;
	age: number;
	data: T;
}

const doc2: Resource<string> = {
	name: "Johan",
	age: 21,
	data: "hello"
};

// enums
enum Weekday {
	monday,
	tueday,
	wednesday,
	thursday,
	friday,
	saturday,
	sunday
}

console.log(Weekday);

// tuples

const tup: [string, number, boolean] = ["johan", 21, true];
