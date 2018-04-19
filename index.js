const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  //create a new var to save it//
  var newArray = kittens.slice();
  //add new element at the end of slice//
  newArray.push(name)
  //return the new var with unmutated elements//
  return newArray
}

function prependKitten(name){
  var newArray = kittens.slice();
  //add new element at start//
  newArray.unshift(name)
  return newArray
}

function removeLastKitten(name){
  var newArray = kittens.slice();
  //remove from the end of slice
  newArray.pop(name)
  return newArray
}

function removeFirstKitten(name){
  var newArray = kittens.slice();
  //remove from start of slice
  newArray.shift(name)
  return newArray
}

