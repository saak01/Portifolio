import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects/projects.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() titleData = '';
  @Input() dataProjects: any;


  constructor( private projectsServices: ProjectsService){

  }

  ngOnInit(): void {
  }

}
