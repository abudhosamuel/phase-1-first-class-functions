// Function that takes a callback function as an argument and calls the callback function
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that takes no arguments and returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      return "I am a named function";
    }
    return namedFunction;
  }
  
  // Function that takes no arguments and returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      return "I am an anonymous function";
    };
  }
  
  // Testing the functions manually
  receivesAFunction(() => console.log("Callback function called!")); // Should output: "Callback function called!"
  
  const namedFunc = returnsANamedFunction();
  console.log(namedFunc()); // Should output: "I am a named function"
  
  const anonymousFunc = returnsAnAnonymousFunction();
  console.log(anonymousFunc()); // Should output: "I am an anonymous function"
  