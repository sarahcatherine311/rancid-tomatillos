describe('Movies', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: './movies.json'
    })
    .visit('http://localhost:3000/')
  })
  it ('Should be able to see a movies details', () => {
    cy.get('.movie-posters').first().click()
    .get('.backdrop-img-section').get('.backdrop-img')
    .get('.movie-poster')
    .get('.movie-details').contains('h2', 'Black Adam')
    .get('.movie-details').contains('h3', "The world needed a hero. It got Black Adam.")
  })
})