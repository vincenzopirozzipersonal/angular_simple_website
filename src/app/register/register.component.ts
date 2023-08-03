import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Import the user service to handle registration

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {username: '', email: '', password: ''};

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.AuthService.register(this.user).subscribe(
      response => {
        // handle successful registration here
        console.log(response);
      },
      error => {
        // handle errors here
        console.error(error);
      }
    );
  }
}
