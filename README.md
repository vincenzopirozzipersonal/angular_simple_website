# angular_simple_website
Website Project
Welcome to the 'Website' project repository. This is a comprehensive, feature-rich website built with Angular 16.1.0 and includes user authentication, a range of MDB Angular UI Kit components and various pages like home, pricing, about, and features.

This README will walk you through the important parts of the project and help you set up and run it locally.

Table of Contents
Getting Started
Project Structure
Services
Modules
Running the project
Testing
Building
Further Help
Contributing
Getting Started
Before you begin, ensure that you have the following software installed on your machine.

Node.js (Preferably the latest LTS version)
npm (This comes with Node.js)
Angular CLI
To install Angular CLI, run this command:

bash
Copy code
npm install -g @angular/cli
Then, clone this repository to your local machine using this command:

bash
Copy code
git clone <repository_url>
Change to the project directory:

bash
Copy code
cd website
Then install the dependencies using:

bash
Copy code
npm install
Project Structure
The project uses a typical Angular project structure.

package.json: This file lists the project dependencies and scripts.

auth.service.ts: This service handles the authentication logic of our app, including user registration and login.

app.module.ts: This is the main module of our application. All other modules and components are imported into this module.

Services
Our main service is AuthService which can be found in auth.service.ts. This service is responsible for user registration and login. It communicates with our back-end server which is currently set to run on http://localhost:8080.

typescript
Copy code
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
Modules
Our app has one main module, AppModule, defined in app.module.ts. This module imports various components, modules, and services. The declarations array includes the components we're using, while the imports array includes the modules we're using.

Running the project
To serve the project locally, run:

bash
Copy code
npm start
Then open your browser and navigate to http://localhost:4200.

Testing
To run the unit tests for the project, execute:

bash
Copy code
npm test
Building
To build the project, run:

bash
Copy code
npm run build
This will create a dist/ directory with the built files.

Further Help
To get more help on the Angular CLI, use ng help or go check out the Angular CLI README.

Contributing
Please read our Contributing Guide before submitting a Pull Request to the project.

Thank you for considering to contribute to our project.
