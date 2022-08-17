import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required, Validators.minLength(6)]
    })
   }

  ngOnInit(): void {
  }

  //Declaro propiedades para obtener username y password
  get Username(){
    return this.loginForm.get("username")
  }

  get Password(){
    return this.loginForm.get("password")
  }

  ingresar() {
    let userLogged = 'invalid_form';
    console.log('Valores del form --> ', this.loginForm.value);
    /* if(this.loginForm.valid) {
      if (this.loginForm.value.username === 'sole' && this.loginForm.value.password === '123456') {
        userLogged = 'login_valid';
      } else {
        userLogged = 'login_invalid';
      }
      console.log('Respuesta del servicio de login --> ', userLogged);
    }
    console.log("usarLogged es: " + userLogged);
    return userLogged;*/
  }

  cerrarSesion(){

  }

}
