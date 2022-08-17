import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //TODO: resolver login
  isLogged: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
