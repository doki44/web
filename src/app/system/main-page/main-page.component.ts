import { Component, OnInit } from '@angular/core';
import {Post} from '../../shared/models/post.model';
import {PostService} from '../../shared/services/post.service';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private postService: PostService) { }
  posts: Post[] = [];
  reviews: Post[] = [];
  public slideIndex = 1;
public regName = localStorage.getItem('UserName');
  ngOnInit(): void {
    this.showSlides(this.slideIndex);
    this.postService.getNews().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

   currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }
   showSlides(n: number): any {
    let i: number;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) {this.slideIndex = 1; }
    if (n < 1) {this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      // @ts-ignore
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace('active', '');
    }
    // @ts-ignore
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += 'active';
  }

  sortNewsByDateNew(): void {
    this.postService.getNewsSortByNewDate().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  sortReviewsByDateNew(): void {
    this.postService.getReviewsSortByNewDate().subscribe((data: Post[]) => {
      this.reviews = data;
      console.log(this.reviews);
    });
  }
}
