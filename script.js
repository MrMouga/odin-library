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




// let theHobbit = new createBook("The Hobbit", "J.R.R. Tolkien", "A great book", "Yes");

// addBookToLibrary(theHobbit);

// let harryPotter = new createBook("Harry Potter", "J.K. Rowling", "A great book", "Yes");

// addBookToLibrary(harryPotter);

// let gameOfThrones = new createBook("Game of Thrones", "George R.R. Martin", "A great book", "Yes");

// addBookToLibrary(gameOfThrones);

// let theLordOfTheRings = new createBook("The Lord of the Rings", "J.R.R. Tolkien", "A great book", "Yes");

// addBookToLibrary(theLordOfTheRings);

let table = document.getElementById("myTable");

function displayBooks() {
    //function to loop the array myLibrary and display all books in the table

    table.replaceChildren();
    let headerTable=
    `<tr>
    <th>Book</th>
    <th>Author</th>
    <th>Comment</th>
    <th>Read</th>
    <th>Delete</th>
    </tr>`;

    table.innerHTML += headerTable;

    for (let i = 0; i < myLibrary.length; i++) {
      let row = 
      `<tr>
      <td>${myLibrary[i].title}</td>
      <td>${myLibrary[i].author}</td>
      <td>${myLibrary[i].comment}</td>
      <td>${myLibrary[i].read}</td>
      <td><button class="delete-btn">Delete</button></td>
      </tr>`;
      table.innerHTML += row;
    }

    deleteBtnListener()
    

  }


function submitBook(){
    alert("Book added to the library");
  let bookValue=document.getElementById("bookField").value;
  let authorValue=document.getElementById("authorField").value;
  let commentValue=document.getElementById("commentField").value;
  let readValue=document.getElementById("readField").value;

  let newBook = new createBook(bookValue, authorValue, commentValue, readValue);
  addBookToLibrary(newBook);
  displayBooks();
}

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  submitBook(); 
});



function deleteBtnListener(){
let deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((btn) => {btn.addEventListener("click", (e) => {

        let bookDeleted = e.target.parentElement.parentElement;
        deleteBook(bookDeleted)
    })});}


function deleteBook(bookDeleted){
   
        for (let i = 0; i < myLibrary.length; i++) {
            if (myLibrary[i].title === bookDeleted.children[0].textContent) {
                myLibrary.splice(i, 1);
            }}

        bookDeleted.remove();
      }


      


