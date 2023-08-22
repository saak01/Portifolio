import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
})
export class CardContactComponent {
  @Input() urlimage: string = '';
  @Input() urlDirect: string = '';
}
