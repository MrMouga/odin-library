let myLibrary = [];
// array to store all books from the library

function Book(title, author, comment, read)
// constructor function to create new books
 {
  this.title=title;
  this.author=author;
  this.comment=comment;
  this.read=read;
}
  


function addBookToLibrary(Book)
//function to add new books to the library
 {
myLibrary.push(Book);
  
}