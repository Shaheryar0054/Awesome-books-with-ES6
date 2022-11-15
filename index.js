/* eslint-disable */
const data = document.querySelector("#data");

// Book class: Represent a book
class Book {
  constructor(title, authore) {
    this.title = title;
    this.authore = authore;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#data");

    const div = document.createElement("div");
    div.className = "data-container";

    div.innerHTML = `
        <p>"${book.title}"</p>
        <p>by</p>
        <p>${book.authore}</p>
        <div><button id="remove-btn" class='delete'>Remove</button></div>
     `;

    list.appendChild(div);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
  }
}

// store data in local storage
class store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBook(book) {
    const books = store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(authore) {
    const books = store.getBooks();
    books.forEach((book, index) => {
      if (book.authore === authore) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

//  Event for display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Add event listener to the add button
document.querySelector("#form").addEventListener("submit", (e) => {
  // Prevent actual submit
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const authore = document.querySelector("#author").value;

  // Instatiate book
  const book = new Book(title, authore);

  // Add book data to screen
  UI.addBookToList(book);

  // Add book to store
  store.addBook(book);

  // clear fields
  UI.clearField();
});

// Event to remove books
document.querySelector("#data").addEventListener("click", (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);
  // Remove book from local storage
  store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
// Navigation section start here
document.getElementById("list").addEventListener("click", () => {
  showList();
});
document.getElementById("add").addEventListener("click", () => {
  showAdd();
});
document.getElementById("cont").addEventListener("click", () => {
  showContact();
});

const defaultDisplay = () => {
  document.getElementById("diplay-list").setAttribute("class", "non-show");
  document.getElementById("input-data").setAttribute("class", "show");
  document.getElementById("contact").setAttribute("class", "non-show");
  document.getElementById("footer").setAttribute("class", "show");
}
defaultDisplay();

const showList = () => {
  document.getElementById("diplay-list").setAttribute("class", "show");
  document.getElementById("input-data").setAttribute("class", "non-show");
  document.getElementById("contact").setAttribute("class", "non-show");
}

const showAdd = () => {
  document.getElementById("diplay-list").setAttribute("class", "non-show");
  document.getElementById("input-data").setAttribute("class", "show");
  document.getElementById("contact").setAttribute("class", "non-show");
}

const showContact = () => {
  document.getElementById("diplay-list").setAttribute("class", "non-show");
  document.getElementById("input-data").setAttribute("class", "non-show");
  document.getElementById("contact").setAttribute("class", "show");
}

document.write(new Date().getFullYear());

function ondate() {
  document.querySelector(".date").innerHTML = Date();
}

ondate();
