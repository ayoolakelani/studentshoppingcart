import { FullScreenService } from './layout/full-screen.service';
import { AuthService } from './services/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fullscreen$: Observable<boolean>;
   constructor(private userService :UserService, private auth: AuthService, router : Router, private fullscreenService: FullScreenService){
    
      this.auth.LoggedInUser.subscribe( user => {
        if(!user) 
        return;
         
           userService.save(user);
            let returnUrl = localStorage.getItem("returnUrl");
            console.log(returnUrl);
           if(!returnUrl)
            return;
            localStorage.removeItem("returnUrl");
              router.navigateByUrl(returnUrl)
       });
    
   }

   ngOnInit() {
   // this.fullscreen$ = this.fullscreenService.fullscreen$;
  }
}
