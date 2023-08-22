import { Component } from '@angular/core';
import { DataService } from 'src/app/modules/data/data.service';

@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.scss']
})
export class HomeRootComponent {
  opened:boolean = false;
  text_data:any;
  title_data: string[] = [];
  dataProjects:any;


  constructor(private dataService: DataService){
     this.text_data = dataService.data_text_pt_br;
     this.title_data = dataService.title_data_pt;
     this.dataProjects = dataService.data_project_pt;
  }

  lightMode(event: Event){
    const checkbox = event.target as HTMLInputElement;
    document.documentElement.setAttribute('data-theme', checkbox.checked! ? "ligth" : "dark")
  }

  navClick():void {
    this.opened = !this.opened;
  }

  languagePtbr():void {
    this.text_data = this.dataService.data_text_pt_br;
    this.title_data = this.dataService.title_data_pt;
    this.dataProjects = this.dataService.data_project_pt;

  }
  languageEn():void {
    this.text_data = this.dataService.data_text_en;
    this.title_data = this.dataService.title_data_en;
    this.dataProjects = this.dataService.data_project_en;
  }

}
