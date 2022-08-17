import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.form = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required, Validators.minLength(6)]
    })
   }

  ngOnInit(): void {
  }

  //Declaro propiedades para obtener username y password
  get Username(){
    return this.form.get("username")
  }

  get Password(){
    return this.form.get("password")
  }

}
