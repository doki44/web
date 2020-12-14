import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {
  RegistrationForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.RegistrationForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      rptpass: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(): void {
    const {email, password, name} = this.RegistrationForm.value;
    const user = new User(email, password, name, 0);
    this.userService.addUser(user).subscribe(() => {
      console.log(user);
      alert('Регистрация прошла успешно!');
      localStorage.setItem('UserName', user.getName());
      localStorage.setItem('UserEmail', user.getEmail());

      this.router.navigate(['/profile'], {
        queryParams: {
          canLogin: true
        }
      });
    });
  }
  // forbiddenEmails(control: FormControl): Promise<any>{
  //   return new Promise((resolve, reject) => {
  //     this.userService.getUsers(control.value)
  //       .subscribe((user: User) => {
  //         if (user) {
  //           resolve({forbiddenEmail: true});
  //         }else{
  //           resolve(null);
  //         }
  //       });
  //   });
  // }
}
