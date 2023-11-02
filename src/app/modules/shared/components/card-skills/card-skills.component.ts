import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.scss']
})
export class CardSkillsComponent {
  @Input() url_card: any;

  constructor(){

  }

}
