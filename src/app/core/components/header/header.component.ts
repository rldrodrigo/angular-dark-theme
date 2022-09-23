import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon: string = 'moon';
  public textTheme: string = 'Dark Theme';
  constructor() { }

  ngOnInit(): void {
  }

  public toggle(){
    const theme = document.body.classList.toggle('dark-theme');
    this.icon = theme ? 'sun' : 'moon';
    this.textTheme = theme ? 'Light Theme' : 'Dark Theme';
  }
}
