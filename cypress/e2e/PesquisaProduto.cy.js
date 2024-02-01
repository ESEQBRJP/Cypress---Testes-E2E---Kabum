import {pesquisaProdutoAction} from "../magazine/pesquisaProdutoPage.cy";
import {homepageAction} from "../magazine/homepage.cy";

describe('Realiza a busca de um produto e entra em sua página', () => {
  const pesquisaProduto = new pesquisaProdutoAction();
  const homepage = new homepageAction();
  let url

  before(() => {
    cy.loadDataFromFixtures('testeConfig.json').then((data) =>{
      url = data.urlMagazine
    })
  })

  it('Busca o produto, passa uma parametro de preço maximo e acessa o primeiro item', () => {
    cy.viewport(1800, 1600)
    cy.visit(url)
    homepage.buscaProduto({produto: 'placa de video 4060 ti'})
    pesquisaProduto.alteraValorMaximoProduto({valorMax: '25000'})
    pesquisaProduto.entraNaPaginaDoPrimeiroProduto()
  })
})