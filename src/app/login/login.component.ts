import { AuthService } from './../services/auth/auth.service';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService :UserService, private auth: AuthService, router : Router, private route : ActivatedRoute){
    
    this.auth.LoggedInUser.subscribe( user => {
      if(user) 
       {
        var url = localStorage.getItem('returnUrl');
        router.navigateByUrl(url);
      }
     });
 }

  
 login() {
  let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || "/";
  localStorage.setItem("returnUrl", returnUrl);
  this.auth.googleLogin();
 }




}
 