

describe('Login com Sucesso', () => {
  it('Realiza o login com sucesso', () => {
    // abre a página de login da Growth Station
    cy.visit('https://growth-station-client-git-processo-qa-growthmachine.vercel.app/login');

// preenche o campo de Email com um e-mail válido cadastrado
    cy.get('.gap-2:nth-child(1) > .w-full').type('usuariodaempresa333@gmail.com');

// preenche o campo de Senha com uma senha válida cadastrada
    cy.get('.flex:nth-child(2) > .w-full').type('Senha.123');

// clica no botão Entrar
    cy.get('.bg-orange-500').click();

// verifica se o login foi realizado com sucesso redirecionando para a página de Conteúdos
    cy.url('').should('contains', 'https://growth-station-client-git-processo-qa-growthmachine.vercel.app/'); // supondo que a URL da página de Conteúdos contenha https://growth-station-client-git-processo-qa-growthmachine.vercel.app/
  })
})

