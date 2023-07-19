function filterArrayData(array) {
  let letters = [];
  let numbers = [];
  let maxNumber = null;

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (typeof item === 'string') {
      letters.push(item);
    } else if (typeof item === 'number') {
      numbers.push(item);
      if (maxNumber === null || item > maxNumber) {
        maxNumber = item;
      }
    }
  }

  return {
    'Array de letras': letters,
    'Array de números': numbers,
    'Maior número': maxNumber,
  };
}

// Exemplo de uso:
let array = ["a", 10, "b", "hello", 122, 15];
let result = filterArrayData(array);
console.log(result);
