describe('App', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: './movies.json'
    })
    .visit('http://localhost:3000/')
    cy.contains('Loading.....').should('not.exist')
  })

  it('Should display loading message while fetching movies', () => {
    cy.contains("Loading.....").should('be.visible')
  })
  it('Should be able to visit a local host and have a movie container display' , () => {
    cy.get(".movie-posters-section").should('have.length', 1)
  })
  it('Should be able to know how many movies are being displayed', () => {
    cy.get(".movie-posters").should('have.length', 40)
  })
  it('Should be able to click on an individual movie', () => {
    cy.get(".movie-posters").first().click()
    cy.url().should('include', '436270')
  })
  
})