import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExperiencesComponent } from './card-experiences.component';

describe('CardExperiencesComponent', () => {
  let component: CardExperiencesComponent;
  let fixture: ComponentFixture<CardExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardExperiencesComponent]
    });
    fixture = TestBed.createComponent(CardExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
