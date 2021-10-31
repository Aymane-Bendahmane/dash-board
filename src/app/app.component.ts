import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard';

  constructor(private rt: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.rt.queryParams.subscribe(d => {
      if(d.access != null && d.refresh != null) {
        let acc = JSON.stringify(d.access);
        let ref = JSON.stringify(d.refresh);

        localStorage.setItem('access-token', acc);
        localStorage.setItem('refresh-token', ref);
      }

    });
  }

}

