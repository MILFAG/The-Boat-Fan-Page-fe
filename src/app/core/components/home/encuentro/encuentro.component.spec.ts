import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentroComponent } from './encuentro.component';

describe('EncuentroComponent', () => {
  let component: EncuentroComponent;
  let fixture: ComponentFixture<EncuentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncuentroComponent]
    });
    fixture = TestBed.createComponent(EncuentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
