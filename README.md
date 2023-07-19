# Desafio de Processamento de Array

Este projeto consiste em um algoritmo que percorre um array unidimensional contendo letras e números, e realiza as seguintes tarefas:

- Obtém um array contendo apenas letras.
- Obtém um array contendo apenas números.
- Obtém o maior número presente no array de números.

## Exemplo de Uso

```javascript
const array = ["a", 10, "b", "hello", 122, 15];
const result = filterArrayData(array);

console.log(result);
```

Neste exemplo, o array fornecido é `["a", 10, "b", "hello", 122, 15]`. A função `filterArrayData` recebe esse array como entrada e retorna um objeto contendo três propriedades: `letters` (array de letras), `numbers` (array de números) e `maxNumber` (maior número encontrado).

Os resultados são então exibidos no console.
