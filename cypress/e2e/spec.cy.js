describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://spider-man-adventure.netlify.app/home.html');
    cy.wait(800).contains("Start").click();
    cy.wait(6000).contains("Finish").click();
    cy.wait(1000).contains("Home").click();
  })
})