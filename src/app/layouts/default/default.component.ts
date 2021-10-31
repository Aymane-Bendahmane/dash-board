import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;

  constructor(public cookieService: CookieService) { }

  ngOnInit() {



  }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
