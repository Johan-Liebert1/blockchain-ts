let greet: Function;

type strOrNum = string | number; // type Alias
type objWithName = { name: String; uid: strOrNum };

const logDetails = (uid: strOrNum, item: string): void => {
	console.log(`${item} has a uid of ${uid}`);
};

greet = (user: objWithName) => console.log(JSON.stringify(user));

// function signature
// ex 1
let greet1: (a: string, b: string) => void;
