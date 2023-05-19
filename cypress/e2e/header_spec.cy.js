describe('Header', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: './movies.json'
    })
    .visit('http://localhost:3000/')
    cy.contains('Loading.....').should('not.exist')
  })

  it('Should have a logo', () => {
    cy.get('.header').get(".logo")
  })

  it('Should be able to search for a movie by its title', () => {
    cy.get(".search-bar").type('woman king')
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