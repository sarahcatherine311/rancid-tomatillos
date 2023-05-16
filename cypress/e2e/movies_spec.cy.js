describe('Movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.contains('Loading.....').should('not.exist')
  })

  it('should display movie posters', () => {
    cy.get('.movie-posters-section').should('exist')
  })
  it('Should display a list of movies', () => {
    cy.get('.movie-posters').should('have.length', 40)
  })
  it("SHould be able to click a movie poster", () => {
    cy.get('.movie-posters').first().click();
    cy.url().should('include', '/436270')
  })
})