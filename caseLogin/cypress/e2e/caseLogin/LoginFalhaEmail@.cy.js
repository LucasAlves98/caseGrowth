

describe('Falha no login com e-mail errado sem o @', () => {
  it('deve apresentar mensagem de erro para senha correta e e-mail errado', () => {
    // abre a página de login da Growth Station
    cy.visit('https://growth-station-client-git-processo-qa-growthmachine.vercel.app/login');

// preenche o campo de Email com um e-mail cadastrado
    cy.get('.gap-2:nth-child(1) > .w-full').type('usuariodaempresa333gmail.com');

// preenche o campo de Senha com uma senha não cadastrada 
    cy.get('.flex:nth-child(2) > .w-full').type('Senha.123');

// clica no botão Entrar
    cy.get('.bg-orange-500').click();

// verifica a mensagem de erro
    cy.contains('*E-mail ou senha inválidos').should('be.visible')
  })
})
