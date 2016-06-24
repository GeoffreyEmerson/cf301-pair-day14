(function(module) { // This is an IIFE that protects a couple funtions in this file.
  var repoView = {}; // creates an empty object that will get atributes and methods later.

  var ui = function() { // Starts the definition of the ui() function
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty(); // Acting on the DOM element selected in line 5, this line finds the 'ul' elements below it and empties them.
    $about.show().siblings().hide(); // Shows the 'about' section if it was hidden, then finds its sibling elements and hides them.
  };

  var render = function(repo) { // start the definition for the render function, accepting a property called 'repo'.
    return $('<li>') // Start by creating a new list item element...
      .html('<a href="' + repo.html_url + '">' + repo.full_name + '</a>'); // ... then add to that list item element some html that has been populated with data from the argument that was passed in.
  };

  repoView.index = function() { // Start defining the repoView.index method.
    ui(); // Call the ui() function.

    $('#about ul').append( // Start by selecting the unordered list element within the 'about' section, then prepare to append something.
      repos.with('forks_count').map(render) // Call for the array of repos filtered by the 'with' method for only the items with a 'forks_count' and create a new array of those elements passed through the render method.
    ); // That new array of html then gets returned to the append method on line 19.
  };

  module.repoView = repoView; // Expose the repoView object to the global scope.
})(window); // Pass the global scope into the IIFE.
