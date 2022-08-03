/// <reference types="cypress"/>

export class TodoPage {
    navigate(){
        cy.visit("https://todomvc-app-for-testing.surge.sh/")
    }
    
    addTodo(todoText){
        cy.get('.new-todo').type(todoText + "{enter}")
    }
    
    toggledTodo(todoToggledIndex) {
        cy.get(`.todo-list li:nth-child(${todoToggledIndex + 1}) .toggle`).click()
    }
    
    clearCompletedTodo(){
        cy.contains("Clear").click()
    }
    
    validateTodoText(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1})`).should("have.text", expectedText)
    }

    validateTodoToggle(todoToggleIndex, shouldBeToggle){
        const toggle = cy.get(`.todo-list li:nth-child(${todoToggleIndex + 1}) .toggle`)
        
        toggle.should(`${shouldBeToggle ? "" : "not."}be.checked`)
    }

    validateToggledTodoAttribute(toggledIndex){
        cy.get(`.todo-list li.completed:nth-child(${toggledIndex + 1}) label`)
            .should("have.css", "color", "rgb(217, 217, 217)")
            .should("have.css","text-decoration-line", "line-through")
    }

    validateNumberOfTodosShown(expectedNumberofTodos){
        cy.get(".todo-list li").should("have.length", expectedNumberofTodos)
    }
}