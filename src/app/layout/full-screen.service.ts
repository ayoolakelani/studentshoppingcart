import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FullScreenService {

  fullscreen$: Observable<boolean>;

  constructor(private router: Router) {
    this.fullscreen$ = this.router.events.pipe(
      filter(event => {
        return event instanceof NavigationEnd;
      })).pipe(
      map((event: NavigationEnd) => {
        const route: any = this.router.config.find(r => {
          return '/' + r.path === event.url.split('?')[0];
        });

        return route && route.fullscreen ? true : false;
      }));
  }
}
