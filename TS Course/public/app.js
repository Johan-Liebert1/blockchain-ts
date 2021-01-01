import Invoice from "./classes/Invoice.js";
import ListTemplate from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
const newInv = new Invoice("Pragyan", "Chips", 23);
const newInv2 = new Invoice("Mario", "Pringles", 100);
let invoices = [newInv, newInv2];
console.log(invoices);
const anchor = document.querySelector("a"); // Object is possibly 'null'
// to combat that put '!' at the end to tell TS that we're certain that the anchor tag exists
// if we are selecting a dom element using a class or an ID, then TS doesn't
// know the type of element we're selecting. So we typecast that element using "as"
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    // doc = object of some class that must have had implemented hasForamtter
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// GENERICS
const addUid = (obj) => {
    return Object.assign(Object.assign({}, obj), { uid: Math.random() * 100 });
};
let doc1 = addUid({ name: "Johan", age: 20 });
console.log(doc1.name);
const doc2 = {
    name: "Johan",
    age: 21,
    data: "hello"
};
// enums
var Weekday;
(function (Weekday) {
    Weekday[Weekday["monday"] = 0] = "monday";
    Weekday[Weekday["tueday"] = 1] = "tueday";
    Weekday[Weekday["wednesday"] = 2] = "wednesday";
    Weekday[Weekday["thursday"] = 3] = "thursday";
    Weekday[Weekday["friday"] = 4] = "friday";
    Weekday[Weekday["saturday"] = 5] = "saturday";
    Weekday[Weekday["sunday"] = 6] = "sunday";
})(Weekday || (Weekday = {}));
console.log(Weekday);
// tuples
const tup = ["johan", 21, true];
