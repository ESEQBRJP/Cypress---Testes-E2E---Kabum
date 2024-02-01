class pesquisaProdutoStatic {
    campoMaxPriceLocator = '[data-testid="price-range-max-input"]'
    cardProdutoGeralLocator = '[class="sc-kTbCBX ciMFyT"]'
}

export default pesquisaProdutoStatic;

class pesquisaProdutoAction  extends  pesquisaProdutoStatic {
    alteraValorMaximoProduto({valorMax}){
        cy.get(this.campoMaxPriceLocator, {timeout: 20000})
            .should('exist')
            .clear()
            .type(valorMax)
            .click()
    }

    entraNaPaginaDoPrimeiroProduto(){
        cy.get(this.cardProdutoGeralLocator, {timeout: 15000})
            .eq(0)
            .should('exist')
            .click()
    }

};

export {pesquisaProdutoStatic, pesquisaProdutoAction};