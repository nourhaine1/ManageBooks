import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';
  data:any
  constructor() {}
  ngOnInit(): void {
    // Retrieve data from localStorage (assuming 'your_data_key' is the key used to store data)
    const books = localStorage.getItem('books'); 
    if (books) {
      this.data = JSON.parse(books);
    }    
  }
  deleteBook (item: string): void {
    console.log('Deleting item:', item);
        this.data = this.data.filter((i: any) => i !== item);

        console.log('Deleting item:', item);    localStorage.setItem('books', JSON.stringify(this.data));
  }
}
