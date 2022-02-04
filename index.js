let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
  cats.push("Ralph");
}

function destructivelyPrependCat() {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop("Ralph");
}

function destructivelyRemoveFirstCat() {
  cats.shift("Bob");
}

function appendCat(newcat = "Broom") {
  return [...cats, newcat];
}

function prependCat(newcat = "Arnold"){
    console.log('returnValueCheck', removeLastCat())
    return [newcat, ...cats]
}

function removeLastCat(){
    console.log(cats.slice(0, 2))
    return cats.slice(0, 2)
}

function removeFirstCat(){
    console.log(cats.slice(1))
    return cats.slice(1)
}