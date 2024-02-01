### Teste E2E com cypress

# Considerações:

Foi utilizado o design patterns POM demonstrando a possibilidade de criar projetos escalaveis, onde há uma grande quantia de testes para serem realizados, evitando assim grandes retrabalhos. E também foi criado comando personalizável em commands.js para mostrar que é possível mesclar este design com os beneficios oferecidos pelo cypress. 

O teste efetua a pesquisa de um produto e verifica se o calculo de frente do site está funcionando.

# Configuração do teste

As configurações de produto, cep e url devem ser definidas no arquivo testeConfig.json

```json
{
  "urlMagazine": "https://www.magazineluiza.com.br/",
  "produtoName": "monitor ultrawide",
  "cepCliente": "72915-036"
}
```

Instale as bibliotecas utilizadas:

```bash
npm install cypress
```

Para mais informações do cypress:
[Cypress](https://docs.cypress.io/guides/overview/why-cypress)
