class pesquisaProdutoStatic {
    campoMaxPriceLocator = '.input[data-testid="price-range-max-input"]'
}

export default pesquisaProdutoStatic;

class pesquisaProdutoAction  extends  pesquisaProdutoStatic {
    alteraValorMaximoProduto({valorMax}){
        cy.get(this.campoMaxPriceLocator)
            .clear()
            .type(valorMax)
            .click()
    }
}