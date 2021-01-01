const addUid = (obj: object): object => {
	return { ...obj, uid: Math.random() * 100 };
};

let doc1 = addUid({ name: "Johan", age: 20 });

console.log(doc1);
