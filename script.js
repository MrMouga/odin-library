let myLibrary = [];
// array to store all books from the library

function createBook(title, author, comment, read)
// constructor function to create new books
 {
  this.title=title;
  this.author=author;
  this.comment=comment;
  this.read=read;
}


function addBookToLibrary(book)
//function to add new books to the library
 {
myLibrary.push(book);
}


//function to loop the array myLibrary and display all books in the table


let theHobbit = new createBook("The Hobbit", "J.R.R. Tolkien", "A great book", "Yes");

addBookToLibrary(theHobbit);

let harryPotter = new createBook("Harry Potter", "J.K. Rowling", "A great book", "Yes");

addBookToLibrary(harryPotter);

let gameOfThrones = new createBook("Game of Thrones", "George R.R. Martin", "A great book", "Yes");

addBookToLibrary(gameOfThrones);

let theLordOfTheRings = new createBook("The Lord of the Rings", "J.R.R. Tolkien", "A great book", "Yes");

addBookToLibrary(theLordOfTheRings);


function displayBooks() {
    let table = document.getElementById("myTable");
    for (let i = 0; i < myLibrary.length; i++) {
      let row = 
      `<tr>
      <td>${myLibrary[i].title}</td>
      <td>${myLibrary[i].author}</td>
      <td>${myLibrary[i].comment}</td>
      <td>${myLibrary[i].read}</td>
      <td><button class="btn delete-btn">Delete</button></td>
      </tr>`;
      table.innerHTML += row;
    }
  }

displayBooks();
