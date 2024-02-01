describe('template spec', () => {
  let url

  before(() => {
    cy.loadDataFromFixtures('testeConfig.json').then((data) =>{
      url = data.urlKabum
    })
  })

  it('passes', () => {
    cy.viewport(1800, 1600)
    cy.visit(url)
  })
})