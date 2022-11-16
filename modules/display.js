/* eslint-disable */
export default class UI {
  static displayBooks() {
    const books = store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#data');

    const div = document.createElement('div');
    div.className = 'data-container';

    div.innerHTML = `
          <p>"${book.title}"</p>
          <p>by</p>
          <p>${book.authore}</p>
          <div><button id="remove-btn" class='delete'>Remove</button></div>
       `;

    list.appendChild(div);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}