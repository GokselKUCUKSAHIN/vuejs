const array = ['hello', 'world', 123];

array.forEach((item, index) => {
  console.log(`index: ${index}, item: ${item}`);
});

const myObject = [{
  name: 'myName1',
  surname: 'mySurname1',
  number: 123,
}, {
  name: 'myName2',
  surname: 'mySurname2',
  number: 456,
}, {
  name: 'myName3',
  surname: 'mySurname3',
  number: 789,
}];

myObject.forEach((obj, index) => {
  console.log(`obj: ${obj}, index: ${index}`);
  Object.entries(obj).forEach(entry => {
   const [key, value] = entry;
   console.log(key, value);
  });
});