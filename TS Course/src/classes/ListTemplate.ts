import HasFormatter from "../interface/hasForamtter.js";

export default class ListTemplate {
	private container: HTMLUListElement;

	constructor(c: HTMLUListElement) {
		this.container = c;
	}

	render(item: HasFormatter, heading: string, position: "start" | "end") {
		const li: HTMLLIElement = document.createElement("li");
		const h4 = document.createElement("h4");
		h4.innerText = heading;

		li.append(h4);

		const p = document.createElement("p");
		p.innerText = item.format();

		li.append(p);

		if (position === "start") {
			this.container.prepend(li);
		} else {
			this.container.append(li);
		}
	}
}
