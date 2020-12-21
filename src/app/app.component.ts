import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy{
  title = 'PlayMix';
  /*get regName(): any {
    return this.userService.authName;
  }*/
  constructor(private userService: UserService, private router: Router) {
  }

  /*onLogout(): void {
    this.userService.logout();
    this.router.navigate(['/main-page']);

  }*/
ngOnInit(): void {
}

  ngOnChanges(): void {
}

  ngOnDestroy(): void {
  }
}
