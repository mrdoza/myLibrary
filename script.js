const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  addBookToLibrary(this);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const book2 = new Book("The Lord of the Rings", "J.R.R.T.", 500, true);

displayBooks();
