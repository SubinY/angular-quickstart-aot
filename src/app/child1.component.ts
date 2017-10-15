import { Component, Input } from '@angular/core';


@Component({
  selector: 'child1',
  template: '<button (click)="onClick()">btn</button>'
})
export class Child1Component {
  @Input() private ipt: any;  // 只要不将ipt绑定在模板上就不会报错
  onClick() {
    console.log(this.ipt);  // Input正常
  }
}
