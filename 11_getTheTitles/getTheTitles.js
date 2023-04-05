const getTheTitles = function(books) {

  return books.reduce( (books, book) => {
    books.push(book.title);
    return books;
  }, [] );
};

//Vanilla JS array functions 
// Do not edit below this line
module.exports = getTheTitles;
