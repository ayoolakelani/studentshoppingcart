
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/services/user/user.service';
import { AppUser } from 'src/app/models/app-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 appUser : AppUser;

  @Output() public sidenavToggle = new EventEmitter();
  
  
  constructor(private auth : AuthService, private userService :  UserService) { 
    auth.AppUser$.subscribe(a => this.appUser = a);
    //console.log(this.user);
  }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit(); 
  }
 
  logout() {
     this.auth.signOut();
    }
 
}
