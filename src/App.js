function App() {
  const faqs = [
    {
      title: "What is JavaScript?",
      text: "JavaScript is a high-level, interpreted programming language that is widely used to create dynamic and interactive web pages."
    },
    {
      title: "How do you declare a variable in JavaScript?",
      text: "You can declare a variable in JavaScript using the 'var', 'let', or 'const' keyword, followed by the variable name."
    },
    {
      title: "What is the purpose of the 'addEventListener' method in JavaScript?",
      text: "The 'addEventListener' method is used to attach an event handler to an HTML element, allowing you to respond to specific events like clicks or keypresses."
    },
    {
      title: "What is the difference between 'null' and 'undefined' in JavaScript?",
      text: "In JavaScript, 'null' is a value that represents the intentional absence of any object value, while 'undefined' is a variable that has been declared but has not been assigned a value."
    },
    {
      title: "Explain the concept of closures in JavaScript.",
      text: "Closures in JavaScript refer to the ability of a function to retain access to variables from its outer (enclosing) scope even after the outer function has finished executing. This allows for the creation of private variables and the preservation of state."
    }
  ];
  
  return(
    <div>Hello World</div>
  );
}

export default App;