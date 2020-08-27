import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  public name: string;
  public age: number;

  constructor() { }

  ngOnInit() {
    this.name = 'Alexander';
    this.age = 31;

    setTimeout(() => {
      this.name = 'John';
    }, 3000);
  }

  getEdadNombre(): string {
    return `${ this.name } : ${ this.age }`;
  }

}
