import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy{
  title = 'Formula-1';
  public regName;
  public router: Router;
  authCheck(): void {
    if (localStorage.getItem('UserName') != null) {
      this.regName = localStorage.getItem('UserName');
    }
  }
  logout(): void {
    localStorage.removeItem('UserName');
    localStorage.clear();
    this.router.navigate(['/']);
  }
ngOnInit(): void {
  this.authCheck();
}

  ngOnChanges(): void {
}

  ngOnDestroy(): void {
  }
}
