describe('Movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .get('.movie-posters').first().click()
    cy.contains('Loading.....').should('not.exist')
  })
  it ('Should be able to see a movies details', () => {
    cy.get('.backdrop-img-section').get('.backdrop-img')
    .get('.movie-poster')
    .get('.movie-details').contains('h2', 'Black Adam')
    .get('.movie-details').contains('h3', "The world needed a hero. It got Black Adam.")
  })
  it ('Should be able to have a trailer', () => {
    cy.get('.videos').get('.video-responsive')
  })
})