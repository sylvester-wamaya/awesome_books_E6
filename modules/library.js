import Book from "./book.js";

const addButton = document.querySelector('#addBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const bookList = document.querySelector('#list');
const removeButton = document.createElement('button');
removeButton.classList.add('my-button-container');
    


export default class Library{
    constructor(){
      this.books = JSON.parse(localStorage.getItem('books')) || [];
  
    }
  
    addBook(title, author) {
      const book = new Book(title, author)
      book.id = this.books.length + 1
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
      while(bookList.firstChild){
        bookList.removeChild(bookList.firstChild)
      }
      this.displaylist();
     
    }
   
  
    displaylist() {
      this.books.forEach((book) => {     
        const bookCard = document.createElement('li');
        bookCard.classList.add('book-stack');
        const removeButton = document.createElement('button');
        removeButton.classList.add('my-button-container');
        bookCard.innerHTML += `    
        <p class="my-title-container">'${book.title}' by ${book.author}</p>
        `;
        bookCard.id = `data-${book.id}`;
        removeButton.addEventListener('click', (e) => {
          const { id } = e.target.dataset;
          this.removeBook(id);
  
        })
        removeButton.textContent = 'Remove';
        removeButton.dataset.id = book.id;
        bookCard.appendChild(removeButton);
        bookList.appendChild(bookCard);
        
      });
    }
  
  
    
  
    removeBook(id) {
  
      this.books = this.books.filter((book) => book.id !== parseInt(id, 10));
      localStorage.setItem('books', JSON.stringify(this.books));
      while(bookList.firstChild){
        bookList.removeChild(bookList.firstChild)
      }
      this.displaylist()
  
    }
  
  
  
    addbtn(library){
      addButton.addEventListener('click', (e) => {
        e.preventDefault();
        library.addBook(formTitle.value, formAuthor.value);
      
        formTitle.value = '';
        formAuthor.value = '';
      });
    }
    
  }
  
  