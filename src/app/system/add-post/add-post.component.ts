import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {PostService} from '../../shared/services/post.service';
import {Post} from '../../shared/models/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  public userName: string = window.localStorage.getItem('UserName');

  constructor(private router: Router, private formBuilder: FormBuilder, private postService: PostService) { }
  editProfileForm = this.formBuilder.group({
    title: this.formBuilder.control('', [Validators.required, Validators.maxLength(100)]),
    text: this.formBuilder.control('', [Validators.required]),
    category: this.formBuilder.control(null, [Validators.required])
  });
  ngOnInit(): void {
  }
  onSubmit(): any {
    const {title, text, category} = this.editProfileForm.value;
    const time = new Date().toLocaleDateString();
    const post = new Post(0, title, this.userName, time, text, category);
    this.postService.addPost(post).subscribe(() => {
      console.log(post);
      alert('Запись создана');
    });
  }
}
