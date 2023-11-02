import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-experiences',
  templateUrl: './card-experiences.component.html',
  styleUrls: ['./card-experiences.component.scss']
})
export class CardExperiencesComponent {
  @Input() data:any;
}
