import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';     
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  loginForm!: FormGroup;

  username: string|any = '';
  password: string|any = '';
  errorMessage: string = '';

  onLogin(): void {
    // this.authService.login(this.username, this.password).subscribe(
    //   (response) => {
    //     const token = response.token;
    //     localStorage.setItem('token', token);
        
    //     this.setting();//calling another function to set the variable to true to use some of the page components for loginuser
    //     this.router.navigate(['/home']);
    //   },
    //   (error) => {
    //     console.error('Login failed:', error);
    //     this.errorMessage = 'Invalid username or password'; // Update error message based on your API response
    //   }
    // );
    this.router.navigate(['/home']);
  }

  // setting(){
  // this.authService.setAuthLogin(true)
  // .then((result) => {
  //   console.log('Login result:', result); // true
  //   const isLoggedIn = this.authService.getIsLoggedIn();//to get the value as true
  //   console.log('Current login status:', isLoggedIn); // true
  // })
  // .catch((error) => {
  //   console.error('Login error:', error);
  // });
  // }

}
