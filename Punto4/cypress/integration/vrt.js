describe('Los estudiantes search', function() {
    it('Visits los estudiantes and search teacher', function() {
      cy.visit('http://127.0.0.1:8080/Punto1/palette.html');
      cy.screenshot();
      //Lineas nuevas  
      cy.contains('Generar nueva paleta').click();
      cy.screenshot();
    });
});