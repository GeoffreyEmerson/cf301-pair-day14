(function(module) { // Yay IIFE!
  var aboutController = {}; // Another empty object that will get properties and/or methods later.

  aboutController.index = function() { // This method calls a model method and passes in a callback function that will act on the data returned.
    repos.requestRepos(repoView.index); // Here it calls the 'repos.requestRepos' with 'repoView.index' as a parameter that will be a callback function.
  };

  module.aboutController = aboutController; // Exposes aboutController to the global scope.
})(window); // Passes the global scope into the iife.
