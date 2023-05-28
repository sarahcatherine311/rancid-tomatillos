describe('Back', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: './movies.json'
    })
    .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 200,
      fixture: './movie.json'
    })
    .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos", {
      statusCode: 200,
      fixture: './trailer.json'
  })
    .visit('http://localhost:3000/')
  })

  it('Should have a logo', () => {
    cy.get('.movie-posters').first().click().get('.back-logo')
  })

  it('Should be able to click the logo and go back to the home page', () => {
    cy.get('.movie-posters').first().click().get('.back-logo').click()
    .get('.movie-posters')
  })
})