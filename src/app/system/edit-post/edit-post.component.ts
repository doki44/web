import {Component, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../shared/models/post.model';
import {PostService} from '../../shared/services/post.service';
import {NgForm} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {Message} from '../../shared/models/message.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  /*  currentPostId = 1;
    currentPost: Post;
    @Input() postsEdit: Post[] = [];
    @Output() onPostEdit = new EventEmitter<Post>();*/
  message: Message;
  post: Post;

  constructor(private postService: PostService,
              private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    /*
        this.onPostChange();
    */
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe((oldPost: Post) => {
      console.log('OK');
      if (oldPost) {
        console.log(oldPost);
        this.post = oldPost;
      } else {
        this.showMessage('Ошибка в получении данных с сервера!');
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  private showMessage(text: string, type: string = 'danger'): void {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  /*onEditSubmit(form: NgForm): any {
    const {title, text} = form.value;
    const  post = new Post(+this.currentPost.getId(), title, this.currentPost.getAuthor(),
      this.currentPost.getDate(), text, this.currentPost.getCategory());
    this.postService.editPost(post).subscribe((data: Post) => {
      this.onPostEdit.emit(data);
      this.message.text = 'Пост успешно обновлен',
        window.setTimeout(() => this.message.text = '', 5000);
    } );
  }*/

  /* onPostChange(): void {
   this.currentPost = this.postsEdit
     .find(c => c.getId() === +this.currentPostId);
   }*/
  onEditSubmit(form: NgForm): any {
/*    const {newTitle, newText} = form.value;
    this.post.title = newTitle;
    this.post.text = newText;*/
    this.postService.editPost(this.post)
      .subscribe(() => this.goBack());
    this.showMessage('Updated');
  }
}
