import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {Message, User} from '../../shared/models/user.model';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  message: Message;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): any {
    this.message = new Message('danger', ' ');
    this.LoginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  // tslint:disable-next-line:typedef
  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout( () => {
      this.message.text = ' ';
    }, 5000);
  }


  onSubmit(): void {
    const formData = this.LoginForm.value;
    this.userService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
      console.log('OK');
      if (user) {
        if (user.getPassword() === formData.password) {
          localStorage.setItem('UserName', user.getName());
          this.router.navigate(['/']);
        } else {
          console.log('Error!');
        }
      }
    });
  }
}
