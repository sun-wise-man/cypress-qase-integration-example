/// <reference types="cypress"/>

import {TodoPage} from "../page-objects/todo-page";

describe("filtering", () => {
    const todoPage = new TodoPage();

    beforeEach(() => {
        todoPage.navigate();
        cy.get('.new-todo').type("Clean room {enter}")
        cy.get('.new-todo').type("Learn Javascript {enter}")
        cy.get('.new-todo').type("Learn Cypress {enter}")

        cy.get(".todo-list li:nth-child(2) .toggle").click()
    })

    it("should filter 'Active' todos", () => {
        cy.contains("Active").click()
        // Assert using text
        // cy.get(".todo-list label").should("not.contain.text", "Learn Javascript")
        cy.get(".todo-list li").should("have.length", 2)
    })

    it("should filter 'All' todos", () => {
        cy.contains("All").click()
        // Assert using text
        // cy.get(".todo-list label").should("not.contain.text", "Learn Javascript")
        cy.get(".todo-list li").should("have.length", 3)
    })

    it("should filter 'Completed' todos", () => {
        cy.contains("Completed").click()
        // Assert using text
        // cy.get(".todo-list label").should("not.contain.text", "Learn Javascript")
        cy.get(".todo-list li").should("have.length", 1)
    })
})