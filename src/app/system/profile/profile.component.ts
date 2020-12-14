import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public userName: string = localStorage.getItem('UserName');
  constructor() { }

   createNote(): void {
     const x = document.getElementById('note-form');
     if (x.style.display === 'none') {
       x.style.display = 'block';
    } else {
       x.style.display = 'none';
    }
  }
  ngOnInit(): void {
  }

}
