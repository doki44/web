import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {observable, Observable, of} from 'rxjs';
import {catchError, map, observeOn, tap} from 'rxjs/operators';
import {Post} from '../models/post.model';
import {User} from '../models/user.model';

@Injectable()
export  class  PostService {
  constructor(private http: HttpClient){
  }
  private userUrl = 'http://localhost:3000';
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>( `${this.userUrl}/posts`, post);
  }
  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.userUrl}/posts/${id}`);
  }
  editPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.userUrl}/posts/${post.getId()}`, post);
  }
  getNews(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.userUrl}/posts?category_like=news`)
      .pipe(map(posts => posts.map(post => Post.transform(post))));
  }
  getNewsSortByOldDate(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.userUrl}/posts?category_like=news&_sort=date&_order=asc`)
      .pipe(map(posts => posts.map(post => Post.transform(post))));
  }
  getNewsSortByNewDate(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.userUrl}/posts?category_like=news&_sort=date&_order=desc`)
      .pipe(map(posts => posts.map(post => Post.transform(post))));
  }
  getNewsSortByAuthor(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.userUrl}/posts?category_like=news&_sort=author&_order=asc`)
      .pipe(map(posts => posts.map(post => Post.transform(post))));
  }

/*
  //////////////Reviews//////////////////
*/
  getReviews(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.userUrl}/posts?category_like=review`)
      .pipe(map(posts => posts.map(post => Post.transform(post))));
  }
  getReviewsSortByOldDate(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.userUrl}/posts?category_like=review&_sort=date&_order=asc`)
      .pipe(map(posts => posts.map(post => Post.transform(post))));
  }
  getReviewsSortByNewDate(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.userUrl}/posts?category_like=review&_sort=date&_order=desc`)
      .pipe(map(posts => posts.map(post => Post.transform(post))));
  }
  getReviewsSortByAuthor(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.userUrl}/posts?category_like=review&_sort=author&_order=asc`)
      .pipe(map(posts => posts.map(post => Post.transform(post))));
  }
  /*
  //////////////Reviews//////////////////
*/


  getPostsByAuthor(author: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.userUrl}/posts?author_like=${author}`)
      .pipe(map(posts => posts.map(post => Post.transform(post))));
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post[]>(`${this.userUrl}/posts?id=${id}`)
      .pipe(map(users => users.length ? Post.transform(users[0]) : null));
  }
}
