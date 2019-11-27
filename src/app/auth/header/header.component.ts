import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = 'https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png';

  constructor() { }

  ngOnInit() {
  }

}
