/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"
import { qase } from "cypress-qase-reporter/dist/mocha"

describe("todo actions", () => {
    const todoPage = new TodoPage()

    beforeEach(()=>{
        todoPage.navigate()
        todoPage.addTodo("Clean Room")
    })

    qase(1, it("should add a new todo to the list", () => {
        todoPage.validateTodoText(0, "Clean Room")
        cy.screenshot();
        todoPage.validateTodoToggle(0, false)
    }))
    
    qase(2, it("should mark a todo as completed", () => {
        todoPage.toggledTodo(0);
        cy.screenshot();
        // Validate
        todoPage.validateTodoToggle(0, true)
        todoPage.validateToggledTodoAttribute(0)
    }))
    
    qase(3, it("should clear completed todos", () => {
        todoPage.toggledTodo(0);
        cy.screenshot();
        todoPage.clearCompletedTodo();
        todoPage.validateNumberOfTodosShown(0);
    }))
})