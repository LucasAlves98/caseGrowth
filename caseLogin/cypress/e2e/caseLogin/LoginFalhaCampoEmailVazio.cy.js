

describe('Falha no login Campo Senha preenchido e Campo E-mail Vazio', () => {
  it('deve apresentar mensagem de erro para email correto e senha com campo vazio', () => {
    // abre a página de login da Growth Station
    cy.visit('https://growth-station-client-git-processo-qa-growthmachine.vercel.app/login');

// preenche o campo de Senha com uma senha não cadastrada 
    cy.get('.flex:nth-child(2) > .w-full').type('Senha.123');

// clica no botão Entrar
    cy.get('.bg-orange-500').click();

// verifica a mensagem de erro
    cy.contains('*E-mail ou senha inválidos').should('be.visible')
  })
})
