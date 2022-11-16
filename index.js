import * as Navigation from './modules/nav-menu.js';
import store from './modules/local-storage.js';
import UI from './modules/display.js';
import Book from './modules/Book-storage.js';
import { DateTime } from './modules/luxon.js';

Navigation.nav();

/* eslint-disable */
const data = document.querySelector("#data");

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

// Luxon Date and time
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('timeText').innerHTML = currentDate;
