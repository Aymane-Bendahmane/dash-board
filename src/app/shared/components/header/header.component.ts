import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MarqueService} from '../../../marqueService/services.service';
import {AuthServiceService} from '../../../Services/Authentication/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public service:AuthServiceService) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  Logout() {
    this.service.Logout();
    document.location.href = 'http://localhost:4200/login'
  }
}
