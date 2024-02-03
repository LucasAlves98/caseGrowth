describe('Playbook usuario membro', () => {
  it('Deve fazer login com sucesso', () => {
    cy.login('usuariodaempresa333@gmail.com', 'Senha.123');

    cy.get('[id^="radix-"]', { timeout: 10000 }).each(($element) => {
      // Use uma variável para armazenar o texto do elemento
      const elementText = $element.text();
    
      // Clique no elemento
      cy.wrap($element).click({ force: true });
    
      // Aguarde até que a página pare de ser atualizada
      cy.wait(2000);  // Ajuste o tempo conforme necessário
    
      // Continue com os próximos comandos apenas se o texto do elemento for válido
      if (elementText) {
        cy.get('.flex:nth-child(2) > .bg-orange-50', { timeout: 10000 }).should('be.visible').click();
    
        // Aguarde novamente, se necessário
        cy.wait(2000);
    
        // Verifique a URL
        cy.url().should('include', 'https://growth-station-client-git-processo-qa-growthmachine.vercel.app/playbook');

        // Verificar se botao azul esta como modo de edição indicando que estou como utilizador membro
        cy.get('button[title="Modo de edição"]').should('be.visible');
        
        // Verificar se lista de icones de edição não esta visivel
        cy.get('.p-1:nth-child(1)', { timeout: 10000 }).should('not.exist');

        // Capture uma screenshot da tela inteira
        cy.screenshot();
      }
    });
 
  });

  
});