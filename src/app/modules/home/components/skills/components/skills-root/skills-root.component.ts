import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/modules/data/data.service';

@Component({
  selector: 'app-skills-root',
  templateUrl: './skills-root.component.html',
  styleUrls: ['./skills-root.component.scss']
})
export class SkillsRootComponent {
  skills_images: any[] = [];
  @Input() titleData = '';

  constructor( private dataService: DataService){
    this.skills_images = dataService.skills_images;
  }
}
