import { Component, Input } from '@angular/core';

// 测试是否可以@Input()与private一起用
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
