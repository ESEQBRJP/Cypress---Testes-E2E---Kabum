class produtoStatic {
    btnCalcularFreteLocator = '[data-testid="shipping-button"]'
    campoCalcularFreteLocator = '[placeholder="Digite seu cep"]'
}

export default produtoStatic;

class produtoAction extends produtoStatic {
    abreModalCalcularFrete(){
        cy.get(this.btnCalcularFreteLocator, {timeout: 20000})
            .click()
    }

    calcularFrete({cep}){
        cy.get(this.campoCalcularFreteLocator, {timeout: 15000})
            .clear()
            .type(cep)
    }

};

export {produtoAction, produtoStatic};