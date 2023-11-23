import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmNoticiasComponent } from './abm-noticias.component';

describe('AbmNoticiasComponent', () => {
  let component: AbmNoticiasComponent;
  let fixture: ComponentFixture<AbmNoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmNoticiasComponent]
    });
    fixture = TestBed.createComponent(AbmNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
