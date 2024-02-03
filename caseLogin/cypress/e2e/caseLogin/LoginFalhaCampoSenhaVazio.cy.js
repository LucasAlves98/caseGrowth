

describe('Falha no login Campo Email preenchido e Campo Senha Vazio', () => {
  it('deve apresentar mensagem de erro para email correto e senha com campo vazio', () => {
    // abre a página de login da Growth Station
    cy.visit('https://growth-station-client-git-processo-qa-growthmachine.vercel.app/login');

// preenche o campo de Email com um e-mail cadastrado
    cy.get('.gap-2:nth-child(1) > .w-full').type('usuariodaempresa333@gmail.com');

// clica no botão Entrar
    cy.get('.bg-orange-500').click();

// verifica a mensagem de erro
    cy.contains('*E-mail ou senha inválidos').should('be.visible')
  })
})
