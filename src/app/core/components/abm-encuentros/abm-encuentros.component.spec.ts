import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmEncuentrosComponent } from './abm-encuentros.component';

describe('AbmEncuentrosComponent', () => {
  let component: AbmEncuentrosComponent;
  let fixture: ComponentFixture<AbmEncuentrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmEncuentrosComponent]
    });
    fixture = TestBed.createComponent(AbmEncuentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
