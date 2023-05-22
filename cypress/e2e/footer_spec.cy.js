describe('Footer', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: './movies.json'
    })
    .visit('http://localhost:3000/')
  })

  it('Should have a logo', () => {
    cy.get('.movie-posters').first().click().get('.footer').get(".footer-logo")
  })
})