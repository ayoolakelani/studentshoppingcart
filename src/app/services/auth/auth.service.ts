import { UserService } from '../user/user.service';
import {AppUser} from './../../models/app-user';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  user$: Observable<firebase.User>;
  
  constructor(private afAuth: AngularFireAuth, private userService : UserService, private router : Router, private route : ActivatedRoute) {
      //// Get auth data
      this.user$ = this.afAuth.authState;
  }
  googleLogin() {

    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider) {

    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.userService.save(credential.user)
      })
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

  get LoggedInUser()  : Observable<firebase.User> {return this.user$;}

  get AppUser$() : Observable<AppUser>
  {
    return this.user$
    .pipe(switchMap(fbu =>
       {
        if(fbu)
        return this.userService.get(fbu.uid);
        return of(null);
      }
    ))
  }
}
