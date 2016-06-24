(function(module) { // This is an IIFE that protects absolutely nothing in this file.
  var repos = {}; // creates an empty object that will get atributes and methods later.

  repos.all = []; // the first property, an array that will be populated with objects containing data about github repos.

  repos.requestRepos = function(callback) { // this is the start of the method that will make an AJAX call to github for data about repos.
    $.get('/github/user/repos' + '?per_page=100' + '&sort=updated') // $.get() is a short way of making a $.getJSON call, which itself is a short way of making a $.ajax call.
    .done(function(data, message, xhr) { repos.all = data; }) // When the remote call is successful, this callback function gets executed. It puts all the data retrieved in the array defined above.
    .done(callback); // After the previous callback function is executed, another callback function gets called. This one is the one provided by whatever code called this method.
  };

  repos.with = function(attr) { // Defines a function called .with which takes one property.
    return repos.all.filter(function(repo) { return repo[attr]; }); // This filters out every repo object that doesn't have the attribute key specified in the function call.
  };

  module.repos = repos; // This makes the repos object available to the global scope.
})(window); // This passes the global scope into the IIFE.

// How does $.get() differ from $.getJSON() and $.ajax()?

// $.get() is a short way of making a $.getJSON call, which itself is a short way of making a $.ajax call.
// They are mostly the same, though the $.get call allows the specification of a different data type if necessary.

// What happens due to the two chained $.done() functions?
//     How many .done() callbacks run?

// Two.

//         If no callbacks run, why not?
//         If one runs, which one runs, and what determines that?
//         If both callbacks run, what order do they run in? Does that order ever change - if so, under what conditions?

// They both get executed, and in the order added.

// Describe how repos.with() works:
//     What is repos.all?

// repos.all is an array of all the repo objects returned from the get request to github.

//     What does .filter() do in general, and what does it do specifically in this code?

// .filter() takes an array and a function and applies that function to every index of the array and returns a new array that has only the indices of the original array where the function returned true.
// In this code, it returns all repo objects but with filters out every repo object that doesn't have the attribute key specified in the function call.

//     What is the anonymous function's param repo?

// It is an individual object from the repos.all array.

//     What is repo[attr]?

// This checks the repo object for the key 'attr'. If it contains a value, it contains an associated value it will return truthy.

//     What does repos.all.filter return?

// It returns all repo objects but with filters out every repo object that doesn't have the attribute key specified in the function call.
