# Statistics-lib

Métodos estatísticos utilizados no site https://chipmunk-beta.vercel.app.

## Métodos disponíveis

- Analytic Hierarchy Process — AHP (Método de Análise Hierárquica) é um método de
decisão multicritério desenvolvido para ajudar na tomada de decisão a partir de
uma série de fatores, sejam quantitativos ou qualitativos.

- one-way ANOVA (Análise de variância) é uma fórmula estatística usada para
comparar as variâncias entre as medianas (ou médias) de grupos diferentes,
ajudando a comparar essas medianas dos grupos para descobrir se eles são
estatisticamente diferentes ou semelhantes.

## Sobre o projeto:

O projeto foi escrito em [Typescript](https://www.typescriptlang.org),
testado com [Jest](https://jestjs.io/) e todas as funções foram documentadas com
[JSDoc](https://jsdoc.app).

## Instalação
```bash
  npm i chipmunk-statistics-lib
  # or
  yarn add chipmunk-statistics-lib
```

## Uso
```ts
  import { ahp, anova } from 'chipmunk-statistics-lib';

  const ahpResult = ahp(data, humanInput)
  const anovaResult = anova(samples, alpha)
```