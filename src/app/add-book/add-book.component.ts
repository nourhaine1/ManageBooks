import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  newBook={bookName:"",author:"",categoryName:"",price:""}
  books: any[] = [];
  addBook(){  console.log("55555555555555555555555555");
 
  // Make sure books is an array
  if (!Array.isArray(this.books)) {
    this.books = [];
  }

  // Add the new book to the existing array
  this.books.push(this.newBook);

  // Save the updated array of books to localStorage
  localStorage.setItem('books', JSON.stringify(this.books));

  // Clear input fields for the next book
  this.newBook = { bookName: '', author: '', categoryName: '', price: '' };
  window.location.reload();
}
}
