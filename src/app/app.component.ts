import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ourfirstapp';
  constructor(private eleRef : ElementRef){}

  getMsg :string='Message From Parent to Child';

  getMsgFromChild(eve : string){
    console.log(eve)
  }


}
