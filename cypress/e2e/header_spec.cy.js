describe('Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.contains('Loading.....').should('not.exist')
  })

  it('Should have a logo', () => {
    cy.get('.header').get(".logo")
  })

  it('Should be able to search for a movie by its title', () => {
    cy.get(".search-bar").type('woman')
      .get('.movie-posters').should('have.length', 1)
      .get('.movie-posters').first().click()
      .url().should('include', '/724495')
  })

  it("Should be able to sort from lowest to highest", () => {
    cy.get('#ratings').select('lowest')
    .get('.movie-posters').first().click()
    .url().should('include', '/829799')
  })

  it("Should be able to sort from highest to lowest", () => {
    cy.get('#ratings').select('lowest')
    .get('#ratings').select('highest')
    .get('.movie-posters').first().click()
    .url().should('include', '/979924')
  })
})