# techup-handson

Notes for JavaScript: 

Variable: is a holder for data 
Common data types: 
    String [stores text e.g.,"xx"], 
    Number [1,2,3...],
        1.5 = float 
    Boolean [true/false], 
    Array [Collection of data - ordered. Order starts from 0]
    In JS: end all lines with ;


Conditionals: if, if-else
    If (condition == x) {Action/result}
    Use == in conditional, not =

Loops
    Repeating an action multiple times, when a condition is fulfilled. 
    While Loop: doing something as long as condition is met.
        E.g., While (age < 32) {
            console.log ("You are" + age + " years old"); -- concatenation
            age = age + 1;
        }
    For loop: doing something for X number of times
        E.g., (let age = 30; age < 32; age++) {
            console.log ("you are" + age + " years old")
        }

Functions = recipes
    Useful in web apps when you want the same function to run every time a button is clicked.
    E.g., function sayHello () {
        console.log ("Hello everyone!")
    }
    E.g., function buttonClick() {
        alert ("Button clicked!");
    }
    To call function: sayHello (); () is critical to call and run function
    In JS: ! is a negation. e.g., !input.includes ("$) - if input does NOT include $
   
