const name = "Pragyan",
	age = 24,
	gender = "male";

const sayHi = (name, age, gender?) => {
	// ? denotes that gender is optional argument
	console.log(`Hello ${name}, you are ${gender} and ${age} years old`);
};

sayHi(name, age);

export {};
