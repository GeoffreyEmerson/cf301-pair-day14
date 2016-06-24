(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  // The 'ctx' object is provided by Page.js when a route is matched and causes
  //  a method to be called. 'ctx' is given to that method call as an argument.
  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // COMMENT (done): What does this method do?  What is it's execution path?
  // It takes in a context object and another function and then it creates a
  //  function that will take an article and attach it to the ctx object with
  //  articles as the key.  Then it calles the function next and passes it the
  //  ctx parameter.
  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };

    // Calling the function findWhere and passing the arguments 'id', the id
    // variable that was on the URL, and the articleData function defined above.
    Article.findWhere('id', ctx.params.id, articleData);
  };

  // COMMENT (done): What does this method do?  What is it's execution path?
  // It is a function that takes a context parameter and another function, Then
  //  declares a variable that contains a function that takes the articlesByAuthor
  //  parameter and stores it in the context object under the articles key. Then
  //  it calles the next function and passes it the ctx object.
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };

    // Calling the function Article.findWhere passing in the arguments 'author',
    //  the author's name with all plus symbols replaced with a space, and the
    //  authorData function as a callback. (NOTE: This was already explained in
    //  the last assignment.)
    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // COMMENT(done): What does this method do?  What is it's execution path?
  // Same as above, only with the category as the search parameter.
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // COMMENT (done): What does this method do?  What is it's execution path?
  // Again, we create a closure, but this time it will assign Article.all to the
  //  context object then call the next function which will get the ctx object
  //  as a parameter.
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    // If there's stuff in Article.all then we'll assign that to the ctx object
    //  with the articles key. Otherwise we'll call the Article.fetchAll and pass
    //  it the articleData function.
    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };

  module.articlesController = articlesController;
})(window);
