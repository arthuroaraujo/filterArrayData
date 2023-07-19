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

Os resultados são então exibidos no console.

## Retorno Esperado

Após executar o algoritmo com o exemplo de uso fornecido, espera-se obter o seguinte retorno:

```javascript
{
  'Array de letras': [ 'a', 'b', 'hello' ],
  'Array de números': [ 10, 122, 15 ],
  'Maior número': 122
}
```

Neste retorno, temos as seguintes informações:

- `'Array de letras'`: Um array contendo apenas as letras presentes no array original.
- `'Array de números'`: Um array contendo apenas os números presentes no array original.
- `'Maior número'`: O maior número encontrado no array de números.
