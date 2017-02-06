import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit  {
    public pageTitle: string = 'Applications';

    constructor() {

    } 

    ngOnInit() {
    }
}
