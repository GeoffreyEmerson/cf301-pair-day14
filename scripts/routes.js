// When a user clicks on a link that has nothing more than the name of our
//  website, it will call the "root" route. page causes this to call the
//  articlesController.loadAll method and the articlesController.index as its
//  "next" property.
page('/',
  articlesController.loadAll,
  articlesController.index);

// Because of line 42 in index.html, when the user clicks the "About" nav item,
//  the URL "end-bit" changes to '/about', and this line maps that URL to the
//  callback aboutController.index, which causes GitHub repo info to be
//  retrieved and displayed. This line's mapping connects the user action of "I
//  click on 'About'" to the visual result of "I now see GitHub repo info."
page('/about', aboutController.index);

// When a user clicks on a URL that includes both the article route and a value,
//  the articlesController.loadById method gets called. Page.js creates an
//  object (called 'ctx') that includes the :id value (ctx.params.id) specified
//  on the URL, and gives that to articlesController.loadById as an argument.
//  It also passes the articlesController.index method as the 'next' function.
page('/article/:id',
  articlesController.loadById,
  articlesController.index);

// Redirect home if the default filter option is selected:
page('/category', '/');
page('/author', '/');

// Like the path above for article/:id, this path will call the function that
//  gets all the articles by the given author.
page('/author/:authorName',
  articlesController.loadByAuthor,
  articlesController.index);

// Same as above, but specific for a category of articles.
page('/category/:categoryName',
  articlesController.loadByCategory,
  articlesController.index);

// This line starts the page URL monitor.
page();
