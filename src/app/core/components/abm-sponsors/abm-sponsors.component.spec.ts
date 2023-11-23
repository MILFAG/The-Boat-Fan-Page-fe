import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmSponsorsComponent } from './abm-sponsors.component';

describe('AbmSponsorsComponent', () => {
  let component: AbmSponsorsComponent;
  let fixture: ComponentFixture<AbmSponsorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmSponsorsComponent]
    });
    fixture = TestBed.createComponent(AbmSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
