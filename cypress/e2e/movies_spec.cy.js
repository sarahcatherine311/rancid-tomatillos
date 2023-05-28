describe('Movies', () => {
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

  it('should display movie posters', () => {
    cy.get('.movie-posters-section').should('exist')
  })
  it('Should display a list of movies', () => {
    cy.get('.movie-posters').should('have.length', 40)
  })
  it("Should be able to click a movie poster and navigate to a new page", () => {
    cy.get('.movie-posters').first().click();
    cy.url().should('include', '/436270')
  })
})