import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';
import {Message} from '../../shared/models/message.model';

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
  ) {}

  ngOnInit(): any {
    this.LoginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
    this.message = new Message('danger', '');
  }

  private showMessage(text: string, type: string = 'danger'): void {
  this.message = new Message(type, text);
  window.setTimeout(() => {
    this.message.text = '';
  }, 5000);
  }
  onSubmit(): void {
    const formData = this.LoginForm.value;
    this.userService.getUserByEmail(formData.email).subscribe((user: User) => {
      console.log('OK');
      if (user) {
        if (user.getPassword() === formData.password) {
          this.userService.login(user);
          this.router.navigate(['/system', 'profile']);
        } else {
          this.showMessage('Неверный пароль!');
        }
      }
      else {
        this.showMessage('Такого пользователя не существует!');
      }
    });
  }
}
