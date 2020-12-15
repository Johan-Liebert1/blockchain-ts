// interface Human {
// 	// won't compile to JS
// 	name: string;
// 	gender: string;
// 	age: number;
// }

class Human {
	public name: string;
	public age: number;
	public gender: string;

	constructor(name: string, age: number, gender: string) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

const johan = new Human("Johan", 21, "Male");

const sayHi = (person: Human): string => {
	return `Hello ${person.name}, you are ${person.gender} and ${person.age} years old`;
};

console.log(sayHi(johan));

export {};
