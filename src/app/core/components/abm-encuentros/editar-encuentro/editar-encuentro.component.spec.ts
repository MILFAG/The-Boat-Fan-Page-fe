import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEncuentroComponent } from './editar-encuentro.component';

describe('EditarEncuentroComponent', () => {
  let component: EditarEncuentroComponent;
  let fixture: ComponentFixture<EditarEncuentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEncuentroComponent]
    });
    fixture = TestBed.createComponent(EditarEncuentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
