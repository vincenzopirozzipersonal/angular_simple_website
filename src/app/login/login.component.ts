import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.authService.login(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);  // Navigate to home page or dashboard page
      },
      err => {
        console.error(err);
      }
    );

    form.reset();
  }
}
