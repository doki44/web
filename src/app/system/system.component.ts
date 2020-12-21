import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})

export class SystemComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  get regName(): any {
    return this.userService.authName;
  }
  onLogout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);

  }
  ngOnInit(): void {
  }
}
