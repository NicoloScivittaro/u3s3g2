import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  onLogin(form: NgForm): void {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
