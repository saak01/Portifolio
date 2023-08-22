import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-introducion',
  templateUrl: './introducion.component.html',
  styleUrls: ['./introducion.component.scss']
})
export class IntroducionComponent {
  @Input() textData = '';
}
