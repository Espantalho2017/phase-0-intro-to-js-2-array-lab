// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

console.log(cats);

function destructivelyAppendCat(name) {
    cats.push(name);
} ;

console.log(cats);

destructivelyAppendCat('Ralph') ;

console.log(cats);

    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

destructivelyPrependCat("Bob");

    console.log(cats);
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat() {
    cats.pop();
}

destructivelyRemoveLastCat();

console.log(cats);
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat() {
    cats.shift()
}

destructivelyRemoveFirstCat
// what does this do?

console.log(cats);
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');

function appendCat(name) {
const copyOfCats = [...cats, name];
return copyOfCats;
}

appendCat("Broom");

console.log(cats);
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');

function prependCat(name) {
const copyOfCats = [name, ...cats];
return copyOfCats;
}

prependCat("Arnold");

console.log(cats);
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');


console.log("test 0");
let newCopyOfCats;

function removeLastCat() {
newCopyOfCats = [...cats];
newCopyOfCats.pop();
return newCopyOfCats;
}

removeLastCat();

console.log("test 1");
console.log(newCopyOfCats);

console.log(cats);
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');

function removeFirstCat() {
    newCopyOfCats = cats.slice(1);
    return newCopyOfCats;

}

removeFirstCat();

    console.log("test 2");
    console.log(newCopyOfCats);

    console.log(cats);
        cats.length = 0;
        cats.push('Milo', 'Otis', 'Garfield');

