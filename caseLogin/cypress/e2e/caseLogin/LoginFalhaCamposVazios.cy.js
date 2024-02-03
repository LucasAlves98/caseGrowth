

describe('Falha no login Campo Senha e Campo E-mail ambos Vazios', () => {
  it('deve apresentar mensagem de erro para email e senha ambos com campo vazios', () => {
    // abre a página de login da Growth Station
    cy.visit('https://growth-station-client-git-processo-qa-growthmachine.vercel.app/login');

// clica no botão Entrar
    cy.get('.bg-orange-500').click();

// verifica a mensagem de erro
    cy.contains('*E-mail ou senha inválidos').should('be.visible')
  })
})
