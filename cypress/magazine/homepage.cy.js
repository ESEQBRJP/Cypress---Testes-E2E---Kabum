class homepageStatic{
    campoPesquisaProdutoLocator = '#input-search'
}

export default homepageStatic;

class homepageAction extends homepageStatic {
    buscaProduto({produto}){
        cy.get(this.campoPesquisaProdutoLocator)
            .clear()
            .type(produto + '{ENTER}')
    }
};

export {homepageStatic, homepageAction};