import { Component, OnInit } from '@angular/core';

import {Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  implements OnInit  {

  constructor(
      private router:Router) {
    
  }

  ngOnInit() {
    this.router.events
      .filter(e => e instanceof RoutesRecognized)
      .pairwise()
      .subscribe((e: any[]) => {
        //console.log(e);
      });
    this.router.events.pairwise().subscribe((e) => {
            //console.log(e);
    })
  }
}
