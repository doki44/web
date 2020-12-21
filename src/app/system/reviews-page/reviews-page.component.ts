import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../../shared/services/post.service';
import {Post} from '../../shared/models/post.model';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.scss']
})
export class ReviewsPageComponent implements OnInit {

  constructor( private postService: PostService) { }
  searchValue = '';
  searchPlaceholder = 'Название';
  searchField = 'title';
  posts: Post[] = [];

  ngOnInit(): void {
    this.postService.getReviews().subscribe((data: Post[]) => {
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


