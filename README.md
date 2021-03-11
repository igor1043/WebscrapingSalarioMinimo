
# WebscrapingSalarioMinimo
Jogo da velha em Javascript trabalhando algoritimos de Inteligencia Artificial. Página Desenvolvida para testes.


JavaScript
## Sobre este repositório

<p>Esta api realiza um webscraping neste <a href="http://www.ipeadata.gov.br/exibeserie.aspx?stub=1&serid1739471028=1739471028">endereço</a>, buscando os valores do salário mínimo vigente em cada periodo. </p>
<p>Os dados foram extraídos de uma tabela contida na página e a formatação foi feita através de uma expressão regular.</p>
<p> Esta api tem duas rotas do tipo get, que retornam um json com o periodo (ano-mês) e o salário mínimo vigente.</p>

## Autor

* Igor Vincius Freitas de Souza


# Sobre


## Rotas

* **/**: retorna todos os dados desde setembro 1994.
* **/2020-05**: retorna somente o salário vigente neste periodo.

## Tecnologias 

* [Express](http://expressjs.com/pt-br/)
* [Node.js](https://nodejs.org/en/)

## Como rodar o projeto 

```bash
$ git clone https://github.com/diasjoaovitor/webscraping-salario-minimo
$ cd webscraping-salario-minimo
$ yarn ou npm i
$ yarn start ou npm start
```
