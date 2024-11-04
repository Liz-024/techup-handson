var age = 20;
age = 65;
console.log(age);

var username = "bob";
var password = "techup";
var isMale = true;
var isLoggedin = false;
var blog_posts = ["hello, how are you?","i am well", "thank you!","the end"];

console.log(username)
console.log(password)
console.log(isMale)
console.log(isLoggedin)
console.log(blog_posts)

if (isMale == true){
    console.log("You are male")
} else {
    console.log("You are not male");
}

while (age <70){
    console.log("your age is " + age);
    age = age + 1;
}

function sayHello() {
        var x = 1;
        while (x <5) {alert ("Hello everyone!");
        x=x+1;
        }  
}

function showAge() {
    var user_input = document.getElementById("user-input").value
    document.getElementById("header-age").textContent = user_input
}
