// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

function appendDriver(name) {
  return newDriver = [...drivers, name]
}

function prependDriver(name) {
  return newDriver = [name, ...drivers]
}

function removeLastDriver() {
  return newArray = drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver(){
  return newArray = drivers.slice(1)
}
