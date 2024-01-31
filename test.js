let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let age = 19;

if (registeredEarly === true && age>18) {
raceNumber += 1000;
  console.log('Runner number ' + raceNumber + ' will race at 9:30 am.');
} else if (registeredEarly === false && age>18){
  raceNumber += 1000;
  console.log('Runner number ' + raceNumber + ' will race at 11:00am.');
} else if (age<18){
  console.log('Runner number ' + raceNumber + ' will race at 12:30pm.');
} else if (age === 18){
  console.log('Please see registration desk.');
}



