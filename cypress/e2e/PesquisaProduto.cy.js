import {pesquisaProdutoAction} from "../magazine/pesquisaProdutoPage.cy";
import {homepageAction} from "../magazine/homepage.cy";
import {produtoAction} from "../magazine/produtoPage.cy";


describe('Realiza a busca de um produto e entra em sua página', () => {
  const pesquisaProduto = new pesquisaProdutoAction();
  const homepage = new homepageAction();
  const produto = new produtoAction();

  let url
  let produtoName
  let clientCep

  before(() => {
    cy.loadDataFromFixtures('testeConfig.json').then((data) =>{
      url = data.urlMagazine
      produtoName = data.produtoName
      clientCep = data.cepCliente
    })
  })

  it('Busca o produto, passa uma parametro de preço maximo, acessa o primeiro item e calcula o frete para o cliente', () => {
    cy.viewport(1800, 1600)
    cy.visit(url)
    homepage.buscaProduto({produto: produtoName})
    pesquisaProduto.alteraValorMaximoProduto({valorMax: '25000'})
    pesquisaProduto.entraNaPaginaDoPrimeiroProduto()
    produto.abreModalCalcularFrete()
    produto.calcularFrete({cep: clientCep})
  })
})