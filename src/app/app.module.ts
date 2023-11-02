import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRootComponent } from './modules/home/components/home-root/home-root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AboutMeComponent } from './modules/home/components/about-me/about-me.component';
import { IntroducionComponent } from './modules/home/components/introducion/introducion.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderRootComponent } from './modules/header/components/header-root/header-root.component';
import { SkillsRootComponent } from './modules/home/components/skills/components/skills-root/skills-root.component';
import { CardSkillsComponent } from './modules/shared/components/card-skills/card-skills.component';
import { ProjectsComponent } from './modules/home/components/projects/projects.component';
import { CardProjectsComponent } from './modules/shared/components/card-projects/card-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './modules/home/components/contact/contact.component';
import { CardContactComponent } from './modules/shared/components/card-contact/card-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperiencesComponent } from './modules/home/components/experiences/experiences.component';
import { CardExperiencesComponent } from './modules/shared/components/card-experiences/card-experiences.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeRootComponent,
    AboutMeComponent,
    IntroducionComponent,
    HeaderRootComponent,
    SkillsRootComponent,
    CardSkillsComponent,
    ProjectsComponent,
    CardProjectsComponent,
    ContactComponent,
    CardContactComponent,
    ExperiencesComponent,
    CardExperiencesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
