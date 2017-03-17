import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grantee-home',
  templateUrl: './grantee-home.component.html',
  styleUrls: ['./grantee-home.component.css']
})
export class GranteeHomeComponent implements OnInit {
  public pageTitle: string = 'Grantee Home';

  constructor() { }

  ngOnInit() {
  }

}
