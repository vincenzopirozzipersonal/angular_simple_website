import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Backend server URL
  private API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // Register new user
  register(user: any) {
    return this.http.post(`${this.API_URL}/auth/register`, user);
  }
  // Login existing user
login(user: any) {
  return this.http.post(`${this.API_URL}/auth/login`, user);
}

}
