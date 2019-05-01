TestBed?

TestBed is a utility provided by @angular/core/testing to configure and create 
Angular Testing Module in which we want to run our unit testing


TestBed.ConfigureTestingModule()

We use this method to configure and create a new Angular testing module. We can configure
the testing module to our liking by passing in a configuration object.
The configuration object can have most of the properties of a normal 
Angular module.

Inject

The first arguement to the inject function is an array of Angular Dependency
injection tokens. The second arguement is the test function whose parameters
are the dependencies that correspond to the Dependency injection tokens from the
array.

Summary
Here we tell the TestBed injector to inject the TodoDataService by specifying
it in the array in the first arguement. As a result we can access the TodoDataService
as service in our test function because service is the name of the first parameter
of the test function

Angular's Template Syntax

[property]="expression": set Property of an element to the value of an expression
e.g. [checked] 
(event)="statement" : execute statement when event occured
e.g. (click)="toggleTodoComplete(true)"
(keyup.enter)="addTodo()": tells Angular to execute addTodo() when the enter key is pressed while 
typing the input element
[(property)]="expression" create two way binding with expression
[(ngModel)]="newTodo.title"
[class.special] = "expression": add special CSS class to element when the value of an 
expression is truthy
[class.completed]="todo.complete"
[style.color]="expression": set color CSS property to the value of expression
*ngIf="todos.length>0": only show the section element and all children when there is addTodo
least on todo