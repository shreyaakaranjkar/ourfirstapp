import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() sendMsgFromParent!:string;
  @Output() sendMsgToParent : EventEmitter<string> = new EventEmitter<string>();

  sendMsgToparent(){
    this.sendMsgToParent.emit('Message from child to parent')
  }
}
