import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.scss']
})
export class CardProjectsComponent implements OnInit {
  @Input() cardData: any;
  @Input() urlYoutube: string = '';
  baseurl: string = '../../../../../assets/icons/';
  sanitizedUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlYoutube);
  }
}
