import { Component } from '@angular/core';
import { Itabs } from 'src/app/interface/student';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  framework : string = 'Angular';

  selectedItem(eve:string){
    console.log(eve);
    this.framework = eve;
  }

  skills : Array<Itabs> = [
  { title :'angular', content : 'Angular 14 is javascript framework, by Google.It has improved performance.'},
  { title :'javascript', content : 'Javascript was written by Brenden Eich.'},
  { title :'bootstrap', content : 'Mark Otto and Jacob Thornton at Twitter.'}];

  //ngswitch

  numvalue = 5;
}
