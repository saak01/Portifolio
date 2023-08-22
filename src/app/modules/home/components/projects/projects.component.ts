import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects/projects.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  data_github: any;
  @Input() titleData = '';
  @Input() dataProjects: any[] = [];

  constructor( private projectsServices: ProjectsService){
  }

  ngOnInit(): void {
    this.getProjects();

  }

  getProjects(){
    firstValueFrom(this.projectsServices.getRepositories())
    .then((element) => {

      this.data_github = element.filter((el:any) => el.name != 'saak01' && el.name != 'DolSemContexto-BotTwitter-Sem_Os_Tokens-Python');


    })
    .catch((err) => {
      console.log(err);
    })
  }
}
