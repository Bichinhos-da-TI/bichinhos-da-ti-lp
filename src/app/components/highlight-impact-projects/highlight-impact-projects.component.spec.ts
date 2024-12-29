import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightImpactProjectsComponent } from './highlight-impact-projects.component';

describe('HighlightImpactProjectsComponent', () => {
  let component: HighlightImpactProjectsComponent;
  let fixture: ComponentFixture<HighlightImpactProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightImpactProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightImpactProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
