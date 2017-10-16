import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = 'csr';
  showHeading = true;
  heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado'];
  /*private */someText = 'hahaha';  // 测试是否能将私有成员绑定在template上

  toggleHeading() {
    this.showHeading = !this.showHeading;
  }
}
