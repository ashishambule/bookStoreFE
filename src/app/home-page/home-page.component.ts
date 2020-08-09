import { Component, OnInit } from '@angular/core';
import { AllBookService } from '../service/all-book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public books;
  public book;
  public selectUser;
  public allUsers;

  constructor(private allBookService: AllBookService, private router: Router) {
    this.getListOfBooks();
  }

  ngOnInit(): void {
    console.log('HOME PAGE');
  }

  getListOfBooks = () => {
    this.allBookService.getAllBooks().subscribe((res) => {
      this.books = res.response;
      for (let index = 0; index < this.books.length; index++) {
        const element = this.books;
        this.book = element[index];
        console.log(this.book);
      }
      // this.books.forEach((element) => {
      //   this.book = element;
      //   console.log(this.book);
      // });
    });
  };

  getBookDetails = (bookID) => {
    this.selectUser = false;

    this.allBookService.getBookdetailsById(bookID).subscribe((res) => {
      console.log(res);
    });
  };

  getAllUsers = () => {
    this.router.navigateByUrl('/users');
    console.log('getAllUsers');
    this.selectUser = true;

    this.allBookService.getAllUsers().subscribe((res) => {
      console.log(res.response);
      this.allUsers = res.response;
    });
  };
}
