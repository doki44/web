import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, NgForm} from '@angular/forms';
import {PostService} from '../../shared/services/post.service';
import {Post} from '../../shared/models/post.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userName: string = window.localStorage.getItem('UserName');
  public userMail: string = window.localStorage.getItem('UserEmail');

  public time = Date.now();

  constructor(private router: Router, private postService: PostService) {
  }

  posts: Post [] = [];

  ngOnInit(): void {
    this.postService.getPostsByAuthor(this.userName).subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }


  deleteEntry(id: number): void {
    this.postService.deletePost(id).subscribe(() => alert('Запись удалена'));
    this.router.navigate(['/system', 'profile']);
  }

  editEntry(post: Post): void {
    this.postService.editPost(post).subscribe();
  }
  newPostAdded(post: Post): void{
    this.posts.push(post);
  }
  postWasEdited(post: Post): void {
  const idx = this.posts
  .findIndex(c => c.getId() === post.getId());
  this.posts[idx] = post;
  }
}
