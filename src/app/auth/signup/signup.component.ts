import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/app.reducer';
import { TrySignup } from '../ngrx/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    // private authService: AuthService,
    // private router: Router,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new TrySignup({username: email, password: password}));
    // this.authService.signupUser(email, password).then((response) => {
    //   this.router.navigate(['/signin']);
    // });
  }
}
