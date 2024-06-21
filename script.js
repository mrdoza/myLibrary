const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Starter Books
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const book2 = new Book("The Lord of the Rings", "J.R.R.T.", 500, true);

function addBookToLibrary(book) {
  myLibrary.push(book);
}
addBookToLibrary(book1);
addBookToLibrary(book2);

// Test Function
// function displayBooks() {
//   for (let i = 0; i < myLibrary.length; i++) {
//     console.log(myLibrary[i]);
//   }
// }
// displayBooks();

const booksGrid = document.querySelector(".booksGrid");

function displayBooks() {
  booksGrid.innerHTML = ""; // Clear the grid first
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCard.innerHTML = `
      <ul>
        <li>Title: ${book.title}</li>
        <li>Author: ${book.author}</li>
        <li>Pages: ${book.pages}</li>
        <li>Read: ${book.read}</li>
      </ul>
    `;
    booksGrid.appendChild(bookCard);
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#hasRead").checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
  form.reset();
});

// Initial display
displayBooks();

//todo: Add a button to each book's display to remove the book from the library.
