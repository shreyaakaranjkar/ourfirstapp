import { Component } from '@angular/core';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent {

  skillsets : Array<string> = ['HTML','CSS','Bootstrap','JS','Angular']

}
