"use strict";
const addUid = (obj) => {
    return Object.assign(Object.assign({}, obj), { uid: Math.random() * 100 });
};
let doc1 = addUid({ name: "Johan", age: 20 });
console.log(doc1);
