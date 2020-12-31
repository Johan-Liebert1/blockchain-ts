let yo = "yoyo";
yo = "1";

const newFunc = (string: string): string => string;

newFunc("2");

// arrays

let names = ["johan", "tenma", "lunge"];

names.push("grimmer");

let mixed: (string | number)[] = ["hello", 1];

mixed.push("bye");
mixed.push(3);
// mixed.push(true); // cannot do this

let mixedVar: number | string;

mixedVar = "myString";
mixedVar = 43;
// mixedVar = false // can't do this

// objects

let ob1: object;
ob1 = []; // allowed as arrays are type of objects

let obj2: {
	name: string;
	age: number;
	isAdmin: boolean;
	noOfKills: [];
};

const newF = () => "hello";
