import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsRootComponent } from './skills-root.component';

describe('SkillsRootComponent', () => {
  let component: SkillsRootComponent;
  let fixture: ComponentFixture<SkillsRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsRootComponent]
    });
    fixture = TestBed.createComponent(SkillsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
