import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, Subject, Subscription, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AllBookService {
  apiUrl = 'https://bots-dev.smartbothub.com/4343';
  constructor(private http: HttpClient, private router: Router) {}

  getAllBooks(): Observable<any> {
    // const headers = this.headers;
    return this.http.get<any>(this.apiUrl + '/books/get-books/', {
      // headers,
    });
  }
  getAllUsers(): Observable<any> {
    // const headers = this.headers;
    return this.http.get<any>(this.apiUrl + '/users/get-users/', {
      // headers,
    });
  }

  getBookdetailsById(bookId): Observable<any> {
    // const headers = this.headers;
    const body = {
      book_id: bookId,
    };
    return this.http.post<any>(this.apiUrl + '/books/book-details', body, {});
  }
}
