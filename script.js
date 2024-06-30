const myLibrary = [];

const form = document.querySelector("form");
const booksGrid = document.querySelector(".booksGrid");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#hasRead").checked;
  if (!title || !author || !pages) {
    alert("Please fill in all fields");
    return;
  }
  const newBook = new Book(title, author, pages, read);
  newBook.addBook();
  form.reset();
  newBook.displayBooks();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.addBook = () => {
    myLibrary.push(this);
  };

  this.displayBooks = () => {
    booksGrid.innerHTML = "";
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
        <button onclick="removeBook(${i})">Remove</button>
      `;
      booksGrid.appendChild(bookCard);
    }
  };
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  book1.displayBooks();
}

// starter books
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const book2 = new Book("The Lord of the Rings", "J.R.R.T.", 500, true);
book1.addBook();
book1.displayBooks();
book2.addBook();
book2.displayBooks();
