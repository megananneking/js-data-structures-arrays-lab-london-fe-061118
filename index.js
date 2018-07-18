const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
}

function appendDriver(name) {
  const driversTwo = drivers.slice();
  driversTwo.push(name);
  return driversTwo;
}

function prependDriver(name) {
  const driversTwo = drivers.slice();
  driversTwo.unshift(name);
  return driversTwo;
}

function removeLastDriver(name) {
  const driversTwo = drivers.slice();
  driversTwo.pop(name);
  return driversTwo;
}

function removeFirstDriver(name) {
  const driversTwo = drivers.slice();
  driversTwo.shift(name);
  return driversTwo;
}