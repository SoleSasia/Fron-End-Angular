import { Component, Input, OnInit } from '@angular/core';
import { PersoDTO } from 'src/app/dto/persoDTO';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //TODO: resolver login
  @Input() isLogged: boolean;
  @Input() persona: PersoDTO;

  githubUrl: string;
  linkedinUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.githubUrl = this.persona.githubUrl;
    this.linkedinUrl = this.persona.linkedinUrl;
  }

}
