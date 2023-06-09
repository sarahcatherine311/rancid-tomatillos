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
  it ('Should be able to see a movies details', () => {
    cy.get('.movie-posters').first().click()
    .get('.backdrop-img-section').get('.backdrop-img')
    .get('.movie-poster')
    .get('.movie-details').contains('h2', 'Black Adam')
  })
})