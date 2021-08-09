/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('/index.html')
    cy.get('input').attachFile('example.json')
  })
})
