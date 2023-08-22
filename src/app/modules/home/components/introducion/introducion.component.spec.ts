import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducionComponent } from './introducion.component';

describe('IntroducionComponent', () => {
  let component: IntroducionComponent;
  let fixture: ComponentFixture<IntroducionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroducionComponent]
    });
    fixture = TestBed.createComponent(IntroducionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
