(() => {
  //forma inferida
  let prices = [1,2,2,1,1,212, "hola", true];

  //forma explicita
  let mixed: (number | string | boolean)[] = ['hola', true]
  mixed.push(12);
  console.log(mixed)

  let numbers = [1,2,2,1,1,212]
  numbers.map(item => item * 2)
  console.log(numbers.map(item => item * 2));
})();
