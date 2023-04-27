let subject1 = {
    id: 0,
    title: "CSS - Cascading Style Sheets",
    content: "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files. To use an external stylesheet, you must link to it in the HTML file. To link to an external style sheet, use the link element inside the head element. The link element must have a rel attribute with the value stylesheet, and an href attribute that specifies the path to the CSS file. The text/css is the type of the document. The rel attribute specifies the relationship between the HTML page and the file it is linked to. The value stylesheet specifies that the HTML page is a stylesheet. The href attribute specifies the path to the CSS file. The path can be absolute or relative. The path is relative to the HTML file. The path can also be a URL. The type attribute specifies the type of the document. The value text/css specifies that the document is a CSS file. The link element is used to link to external resources. The link element can be used to link to external style sheets, or to external scripts, or to external RSS feeds, or to any kind of external document. The link element is an empty element. It contains attributes only.", 
    links: [{url: "https://www.w3schools.com/css/", title: "w3schools"}, {url:"https://www.w3schools.com/css/css_intro.asp", title: "w3schools2"}],
    syntax: ".class {property: value;}",
    questionprompt: "",
    question: "what is css?",
    answer: "dunno",
    note: []
  };
let subject2 = {
    id: 1,
    title: "Functions",
    content: "In JavaScript, a function is a block of code that performs a specific task, which can be executed whenever it is called (invoked). Functions in JavaScript are used to modularize code, improve code reusability, and help in organizing code into logical units.",
    links: [{url: "https://www.w3schools.com/css/", title: "w3schools"}, {url: "https://www.w3schools.com/css/css_intro.asp"}],
    questionprompt: "",
    question: "what is css?",
    syntax: "function myFunction() {console.log('hello world!')}",
    answer: "dunno",
    note: []
};
let subject3 = {
    id: 2,
    title: "Variables",
    content: "A variable is a named container that stores a value, which can be of any data type such as numbers, strings, booleans, objects, or functions. Variables in JavaScript are declared using the var, let, or const keywords. Here is an example of a simple JavaScript variable declaration using the var keyword.",
    links: [{url: "https://www.w3schools.com/css/", title: "w3schools"}, "https://www.w3schools.com/css/css_intro.asp"],
    questionprompt: "",
    question: "what is css?",
    syntax: "let message = 'hello world!'",
    answer: "dunno",
    note: []
};
let subject4 = {
    id: 3,
    title: "React",
    content: "React is a JavaScript library used for building user interfaces (UIs) in web applications. It is an open-source library developed by Facebook and has become one of the most popular libraries for building modern web applications. At its core, React uses a component-based architecture, where each component represents a part of the UI that can be reused across the application. React components are typically written in JSX, which is a syntax extension for JavaScript that allows developers to write HTML-like code in their JavaScript files. React components can be divided into two main types: class components and functional components. Class components are defined using a class keyword and have access to lifecycle methods, while functional components are defined using a function and are simpler and easier to understand.React components can also have state, which is a JavaScript object that stores data that can change over time. Changes in state trigger the re-rendering of the component, updating the UI to reflect the new state. To use React in a web application, developers typically use a build tool such as Webpack or Create React App to compile their code and generate a production-ready build. The resulting build can then be deployed to a web server or a cloud-based service provider such as AWS or Google Cloud Platform.",
    links: [{url: "https://www.w3schools.com/REACT/DEFAULT.ASP", title: "w3schools"}, "https://www.w3schools.com/REACT/DEFAULT.ASP",  ],
    questionprompt: "",
    question: "what is css?",
    syntax: "<h1>Hello, World!</h1>",
    answer: "dunno",
    note: []
};

let subject5 = {
    id: 4,
    title: "Objects",
    content: "In JavaScript, an object is a collection of key-value pairs where the values can be of any data type, including other objects, arrays, and functions. Objects are used to represent real-world entities or concepts and can be used to organize and manipulate data in a program. In React, objects are often used to represent the state and props of a component. The state object contains data that can change over time and triggers re-rendering of the component when the state changes, while the props object contains data that is passed down from a parent component to a child component.",
    links: [{url: "https://www.w3schools.com/css/", title: "w3schools"}, "https://www.w3schools.com/css/css_intro.asp"],
    questionprompt: "",
    question: "what is css?",
    syntax: "let person = {name: 'John', age: 20}",
    answer: "dunno",
    note: []
};

let subject6 = {
    id: 5,
    title: "Booleans",
    content: "The variables isTrue and isFalse are Boolean values in JavaScript. The true and false keywords represent the Boolean data type, which can have two possible values: true or false. Booleans are often used in conditional statements and logical expressions to control the flow of a program. Overall, Booleans are a simple but powerful data type in both JavaScript and React, used to represent true/false values and control program flow.",
    links: [{url: "https://www.w3schools.com/css/", title: "w3schools"}, "https://www.w3schools.com/css/css_intro.asp"],
    questionprompt: "",
    question: "what is css?",
    syntax: "let isSunny = true; or let isSunny = false;",
    answer: "dunno",
    note: []
};

let subject7 = {
    id: 6,
    title: "Arrays",
    content: "An array is a collection of values that can be of any data type, including other arrays, objects, and functions. Arrays are used to store and manipulate lists of data in a program and are one of the most commonly used data structures in JavaScript.",
    links: [{url: "https://www.w3schools.com/css/", title: "w3schools"}, "https://www.w3schools.com/css/css_intro.asp"],
    questionprompt: "",
    question: "what is css?",
    syntax: "let numbers = [1, 2, 3, 4, 5];",
    answer: "dunno",
    note: []
};

let subject8 = {
    id: 7,
    title: "Array Methods",
    content: "JavaScript arrays have many built-in methods that can be used to manipulate the data stored in an array. Some of the most commonly used array methods include push(), pop(), shift(), unshift(), slice(), splice(), and concat().",
    links: [{url: "https://www.w3schools.com/css/", title: "w3schools"}, "https://www.w3schools.com/css/css_intro.asp"],
    questionprompt: "",
    question: "what is css?",
    syntax: "let numbers = [1, 2, 3, 4, 5]; let doubledNumbers = numbers.map((num) => num * 2);",
    answer: "dunno",
    note: []
};

export let SOCdata = [subject1, subject2, subject3, subject4, subject5, subject6, subject7, subject8]
