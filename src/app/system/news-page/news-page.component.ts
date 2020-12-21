import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../../shared/services/post.service';
import {Post} from '../../shared/models/post.model';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  constructor( private postService: PostService) { }
  searchValue = '';
  searchPlaceholder = 'Название';
  searchField = 'title';
  posts: Post[] = [];

  ngOnInit(): void {
    this.postService.getNews().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  sortByDateOld(): void {
    this.postService.getNewsSortByOldDate().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  sortByDateNew(): void {
    this.postService.getNewsSortByNewDate().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  sortByAuthor(): void {
    this.postService.getNewsSortByAuthor().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  changeCriteria(field: string): any {
  const namesMap = {
    title: 'Название',
    date: 'Дата',
    id: 'Номер',
    };
  this.searchPlaceholder = namesMap[field];
  this.searchField = field;
  }

}
